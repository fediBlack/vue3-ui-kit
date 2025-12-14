import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Input from "./Input.vue";

describe("Input", () => {
  it("renders with label", () => {
    const wrapper = mount(Input, {
      props: { label: "Email" },
    });
    expect(wrapper.find(".input-label").text()).toBe("Email");
  });

  it("shows required asterisk when required", () => {
    const wrapper = mount(Input, {
      props: { label: "Name", required: true },
    });
    expect(wrapper.find(".input-required").exists()).toBe(true);
  });

  it("emits update:modelValue on input", async () => {
    const wrapper = mount(Input);
    const input = wrapper.find("input");
    await input.setValue("test@example.com");
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([
      "test@example.com",
    ]);
  });

  it("shows error message", () => {
    const wrapper = mount(Input, {
      props: { error: "This field is required" },
    });
    expect(wrapper.find(".input-error").text()).toBe("This field is required");
  });

  it("applies error class when error prop is set", () => {
    const wrapper = mount(Input, {
      props: { error: "Error" },
    });
    expect(wrapper.find(".input").classes()).toContain("input--error");
  });

  it("is disabled when disabled prop is true", () => {
    const wrapper = mount(Input, {
      props: { disabled: true },
    });
    expect(wrapper.find("input").attributes("disabled")).toBeDefined();
  });

  it("applies correct size class", () => {
    const wrapper = mount(Input, {
      props: { size: "lg" },
    });
    expect(wrapper.find(".input").classes()).toContain("input--lg");
  });
});
