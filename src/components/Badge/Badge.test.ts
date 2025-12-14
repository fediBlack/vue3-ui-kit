import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Badge from "./Badge.vue";

describe("Badge", () => {
  it("renders slot content", () => {
    const wrapper = mount(Badge, {
      slots: { default: "New" },
    });
    expect(wrapper.text()).toBe("New");
  });

  it("applies correct variant class", () => {
    const wrapper = mount(Badge, {
      props: { variant: "success" },
    });
    expect(wrapper.classes()).toContain("badge--success");
  });

  it("applies correct size class", () => {
    const wrapper = mount(Badge, {
      props: { size: "lg" },
    });
    expect(wrapper.classes()).toContain("badge--lg");
  });

  it("applies rounded class when rounded prop is true", () => {
    const wrapper = mount(Badge, {
      props: { rounded: true },
    });
    expect(wrapper.classes()).toContain("badge--rounded");
  });
});
