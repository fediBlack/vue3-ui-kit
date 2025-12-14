import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "./Button.vue";

describe("Button", () => {
  it("renders slot content", () => {
    const wrapper = mount(Button, {
      slots: { default: "Click me" },
    });
    expect(wrapper.text()).toBe("Click me");
  });

  it("applies correct variant class", () => {
    const wrapper = mount(Button, {
      props: { variant: "secondary" },
    });
    expect(wrapper.classes()).toContain("btn--secondary");
  });

  it("applies correct size class", () => {
    const wrapper = mount(Button, {
      props: { size: "lg" },
    });
    expect(wrapper.classes()).toContain("btn--lg");
  });

  it("emits click event when clicked", async () => {
    const wrapper = mount(Button);
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toHaveLength(1);
  });

  it("does not emit click when disabled", async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    });
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeUndefined();
  });

  it("shows loading spinner when loading", () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    });
    expect(wrapper.find(".btn__spinner").exists()).toBe(true);
  });

  it("disables button when loading", () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    });
    expect(wrapper.attributes("disabled")).toBeDefined();
  });
});
