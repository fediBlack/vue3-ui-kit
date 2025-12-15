import { defineComponent as y, computed as p, createElementBlock as l, openBlock as a, normalizeClass as m, createCommentVNode as s, createElementVNode as c, renderSlot as f, ref as k, createTextVNode as g, toDisplayString as h, watch as B, onMounted as C, onUnmounted as w, createBlock as V, Teleport as I, createVNode as z, Transition as q, withCtx as E, withModifiers as O } from "vue";
const M = ["type", "disabled"], N = {
  key: 0,
  class: "btn__spinner"
}, F = /* @__PURE__ */ y({
  __name: "Button",
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(e, { emit: o }) {
    const t = e, n = o, d = p(() => [
      "btn",
      `btn--${t.variant}`,
      `btn--${t.size}`,
      {
        "btn--disabled": t.disabled || t.loading,
        "btn--loading": t.loading
      }
    ]), u = (r) => {
      !t.disabled && !t.loading && n("click", r);
    };
    return (r, i) => (a(), l("button", {
      class: m(d.value),
      type: e.type,
      disabled: e.disabled || e.loading,
      onClick: u
    }, [
      e.loading ? (a(), l("span", N)) : s("", !0),
      c("span", {
        class: m({ "btn__content--hidden": e.loading })
      }, [
        f(r.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 10, M));
  }
}), b = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, d] of o)
    t[n] = d;
  return t;
}, le = /* @__PURE__ */ b(F, [["__scopeId", "data-v-d0914049"]]), T = { class: "input-wrapper" }, A = {
  key: 0,
  class: "input-label"
}, L = {
  key: 0,
  class: "input-required"
}, S = ["type", "value", "placeholder", "disabled", "required"], D = {
  key: 1,
  class: "input-error"
}, U = /* @__PURE__ */ y({
  __name: "Input",
  props: {
    modelValue: { default: void 0 },
    type: { default: "text" },
    placeholder: { default: "" },
    label: { default: "" },
    error: { default: "" },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    size: { default: "md" }
  },
  emits: ["update:modelValue", "blur", "focus"],
  setup(e, { emit: o }) {
    const t = e, n = o, d = k(!1), u = p(() => [
      "input",
      `input--${t.size}`,
      {
        "input--error": t.error,
        "input--disabled": t.disabled,
        "input--focused": d.value
      }
    ]), r = (v) => {
      const $ = v.target;
      n("update:modelValue", $.value);
    }, i = (v) => {
      d.value = !0, n("focus", v);
    }, _ = (v) => {
      d.value = !1, n("blur", v);
    };
    return (v, $) => (a(), l("div", T, [
      e.label ? (a(), l("label", A, [
        g(h(e.label) + " ", 1),
        e.required ? (a(), l("span", L, "*")) : s("", !0)
      ])) : s("", !0),
      c("input", {
        class: m(u.value),
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        required: e.required,
        onInput: r,
        onFocus: i,
        onBlur: _
      }, null, 42, S),
      e.error ? (a(), l("span", D, h(e.error), 1)) : s("", !0)
    ]));
  }
}), oe = /* @__PURE__ */ b(U, [["__scopeId", "data-v-2a892293"]]), j = {
  key: 0,
  class: "card__header"
}, x = { class: "card__body" }, G = {
  key: 1,
  class: "card__footer"
}, H = /* @__PURE__ */ y({
  __name: "Card",
  props: {
    padding: { default: "md" },
    shadow: { default: "md" },
    hoverable: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (o, t) => (a(), l("div", {
      class: m([
        "card",
        `card--padding-${e.padding}`,
        `card--shadow-${e.shadow}`,
        { "card--hoverable": e.hoverable }
      ])
    }, [
      o.$slots.header ? (a(), l("div", j, [
        f(o.$slots, "header", {}, void 0, !0)
      ])) : s("", !0),
      c("div", x, [
        f(o.$slots, "default", {}, void 0, !0)
      ]),
      o.$slots.footer ? (a(), l("div", G, [
        f(o.$slots, "footer", {}, void 0, !0)
      ])) : s("", !0)
    ], 2));
  }
}), de = /* @__PURE__ */ b(H, [["__scopeId", "data-v-346715d4"]]), J = {
  key: 0,
  class: "modal__header"
}, K = {
  key: 0,
  class: "modal__title"
}, P = { class: "modal__body" }, Q = {
  key: 1,
  class: "modal__footer"
}, R = /* @__PURE__ */ y({
  __name: "Modal",
  props: {
    modelValue: { type: Boolean },
    title: { default: void 0 },
    size: { default: "md" },
    closeOnOverlay: { type: Boolean, default: !0 },
    showCloseButton: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "close"],
  setup(e, { emit: o }) {
    const t = e, n = o, d = () => {
      n("update:modelValue", !1), n("close");
    }, u = () => {
      t.closeOnOverlay && d();
    }, r = (i) => {
      i.key === "Escape" && t.modelValue && d();
    };
    return B(
      () => t.modelValue,
      (i) => {
        i ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
      }
    ), C(() => {
      document.addEventListener("keydown", r);
    }), w(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (i, _) => (a(), V(I, { to: "body" }, [
      z(q, { name: "modal" }, {
        default: E(() => [
          e.modelValue ? (a(), l("div", {
            key: 0,
            class: "modal-overlay",
            onClick: u
          }, [
            c("div", {
              class: m(["modal", `modal--${e.size}`]),
              role: "dialog",
              "aria-modal": "true",
              onClick: _[0] || (_[0] = O(() => {
              }, ["stop"]))
            }, [
              e.title || e.showCloseButton ? (a(), l("div", J, [
                e.title ? (a(), l("h3", K, h(e.title), 1)) : s("", !0),
                e.showCloseButton ? (a(), l("button", {
                  key: 1,
                  class: "modal__close",
                  "aria-label": "Close modal",
                  onClick: d
                }, " × ")) : s("", !0)
              ])) : s("", !0),
              c("div", P, [
                f(i.$slots, "default", {}, void 0, !0)
              ]),
              i.$slots.footer ? (a(), l("div", Q, [
                f(i.$slots, "footer", {}, void 0, !0)
              ])) : s("", !0)
            ], 2)
          ])) : s("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), se = /* @__PURE__ */ b(R, [["__scopeId", "data-v-e09e331d"]]), W = /* @__PURE__ */ y({
  __name: "Badge",
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    rounded: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (o, t) => (a(), l("span", {
      class: m([
        "badge",
        `badge--${e.variant}`,
        `badge--${e.size}`,
        { "badge--rounded": e.rounded }
      ])
    }, [
      f(o.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ne = /* @__PURE__ */ b(W, [["__scopeId", "data-v-27e3d95d"]]), X = { class: "alert__icon" }, Y = { class: "alert__content" }, Z = {
  key: 0,
  class: "alert__title"
}, ee = { class: "alert__message" }, te = /* @__PURE__ */ y({
  __name: "Alert",
  props: {
    variant: { default: "info" },
    dismissible: { type: Boolean, default: !1 },
    title: { default: null }
  },
  emits: ["close"],
  setup(e, { emit: o }) {
    const t = o, n = {
      success: "✓",
      error: "✕",
      warning: "⚠",
      info: "ℹ"
    };
    return (d, u) => (a(), l("div", {
      class: m(["alert", `alert--${e.variant}`]),
      role: "alert"
    }, [
      c("div", X, h(n[e.variant]), 1),
      c("div", Y, [
        e.title ? (a(), l("div", Z, h(e.title), 1)) : s("", !0),
        c("div", ee, [
          f(d.$slots, "default", {}, void 0, !0)
        ])
      ]),
      e.dismissible ? (a(), l("button", {
        key: 0,
        class: "alert__close",
        "aria-label": "Close alert",
        onClick: u[0] || (u[0] = (r) => t("close"))
      }, " × ")) : s("", !0)
    ], 2));
  }
}), ie = /* @__PURE__ */ b(te, [["__scopeId", "data-v-100d0fba"]]);
export {
  ie as Alert,
  ne as Badge,
  le as Button,
  de as Card,
  oe as Input,
  se as Modal
};
