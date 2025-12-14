import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Card from "./Card.vue";

describe("Card", () => {
  it("renders default slot content", () => {
    const wrapper = mount(Card, {
      slots: { default: "Card content" },
    });
    expect(wrapper.text()).toContain("Card content");
  });

  it("renders header slot when provided", () => {
    const wrapper = mount(Card, {
      slots: { header: "Card Header" },
    });
    expect(wrapper.find(".card__header").text()).toBe("Card Header");
  });

  it("renders footer slot when provided", () => {
    const wrapper = mount(Card, {
      slots: { footer: "Card Footer" },
    });
    expect(wrapper.find(".card__footer").text()).toBe("Card Footer");
  });

  it("applies correct padding class", () => {
    const wrapper = mount(Card, {
      props: { padding: "lg" },
    });
    expect(wrapper.classes()).toContain("card--padding-lg");
  });

  it("applies correct shadow class", () => {
    const wrapper = mount(Card, {
      props: { shadow: "sm" },
    });
    expect(wrapper.classes()).toContain("card--shadow-sm");
  });

  it("applies hoverable class when hoverable prop is true", () => {
    const wrapper = mount(Card, {
      props: { hoverable: true },
    });
    expect(wrapper.classes()).toContain("card--hoverable");
  });
});
