/* eslint-disable prettier/prettier */
// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react"

type ComponentRegistry = Record<
  string,
  Record<
    string,
    {
      name: string
      story: string
      component: string
      file: string
    }
  >
>

export const Index: ComponentRegistry = {
  "avatar": {
    "custom": {
      name: "avatar-custom",
      story: "custom",
      component: React.lazy(() => import("@/registry/avatar/custom")),
      file: "registry/avatar/custom.tsx"
    },
    "default": {
      name: "avatar-default",
      story: "default",
      component: React.lazy(() => import("@/registry/avatar/default")),
      file: "registry/avatar/default.tsx"
    },
    "notification": {
      name: "avatar-notification",
      story: "notification",
      component: React.lazy(() => import("@/registry/avatar/notification")),
      file: "registry/avatar/notification.tsx"
    },
    "sizes": {
      name: "avatar-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/avatar/sizes")),
      file: "registry/avatar/sizes.tsx"
    },
    "status-and-notification": {
      name: "avatar-status-and-notification",
      story: "status-and-notification",
      component: React.lazy(() => import("@/registry/avatar/status-and-notification")),
      file: "registry/avatar/status-and-notification.tsx"
    },
    "status": {
      name: "avatar-status",
      story: "status",
      component: React.lazy(() => import("@/registry/avatar/status")),
      file: "registry/avatar/status.tsx"
    },
  },
  "badge": {
    "colors": {
      name: "badge-colors",
      story: "colors",
      component: React.lazy(() => import("@/registry/badge/colors")),
      file: "registry/badge/colors.tsx"
    },
    "default": {
      name: "badge-default",
      story: "default",
      component: React.lazy(() => import("@/registry/badge/default")),
      file: "registry/badge/default.tsx"
    },
  },
  "breadcrumbs": {
    "default": {
      name: "breadcrumbs-default",
      story: "default",
      component: React.lazy(() => import("@/registry/breadcrumbs/default")),
      file: "registry/breadcrumbs/default.tsx"
    },
    "icon": {
      name: "breadcrumbs-icon",
      story: "icon",
      component: React.lazy(() => import("@/registry/breadcrumbs/icon")),
      file: "registry/breadcrumbs/icon.tsx"
    },
  },
  "checkbox": {
    "default": {
      name: "checkbox-default",
      story: "default",
      component: React.lazy(() => import("@/registry/checkbox/default")),
      file: "registry/checkbox/default.tsx"
    },
    "disabled": {
      name: "checkbox-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/checkbox/disabled")),
      file: "registry/checkbox/disabled.tsx"
    },
    "intermediate": {
      name: "checkbox-intermediate",
      story: "intermediate",
      component: React.lazy(() => import("@/registry/checkbox/intermediate")),
      file: "registry/checkbox/intermediate.tsx"
    },
    "invalid": {
      name: "checkbox-invalid",
      story: "invalid",
      component: React.lazy(() => import("@/registry/checkbox/invalid")),
      file: "registry/checkbox/invalid.tsx"
    },
  },
  "checkbox-group": {
    "default": {
      name: "checkbox-group-default",
      story: "default",
      component: React.lazy(() => import("@/registry/checkbox-group/default")),
      file: "registry/checkbox-group/default.tsx"
    },
    "disabled": {
      name: "checkbox-group-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/checkbox-group/disabled")),
      file: "registry/checkbox-group/disabled.tsx"
    },
    "horizontal": {
      name: "checkbox-group-horizontal",
      story: "horizontal",
      component: React.lazy(() => import("@/registry/checkbox-group/horizontal")),
      file: "registry/checkbox-group/horizontal.tsx"
    },
    "invalid": {
      name: "checkbox-group-invalid",
      story: "invalid",
      component: React.lazy(() => import("@/registry/checkbox-group/invalid")),
      file: "registry/checkbox-group/invalid.tsx"
    },
  },
  "heading": {
    "align": {
      name: "heading-align",
      story: "align",
      component: React.lazy(() => import("@/registry/heading/align")),
      file: "registry/heading/align.tsx"
    },
    "color": {
      name: "heading-color",
      story: "color",
      component: React.lazy(() => import("@/registry/heading/color")),
      file: "registry/heading/color.tsx"
    },
    "default": {
      name: "heading-default",
      story: "default",
      component: React.lazy(() => import("@/registry/heading/default")),
      file: "registry/heading/default.tsx"
    },
    "sizes": {
      name: "heading-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/heading/sizes")),
      file: "registry/heading/sizes.tsx"
    },
    "truncate": {
      name: "heading-truncate",
      story: "truncate",
      component: React.lazy(() => import("@/registry/heading/truncate")),
      file: "registry/heading/truncate.tsx"
    },
  },
  "label": {
    "default": {
      name: "label-default",
      story: "default",
      component: React.lazy(() => import("@/registry/label/default")),
      file: "registry/label/default.tsx"
    },
    "disabled": {
      name: "label-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/label/disabled")),
      file: "registry/label/disabled.tsx"
    },
    "required": {
      name: "label-required",
      story: "required",
      component: React.lazy(() => import("@/registry/label/required")),
      file: "registry/label/required.tsx"
    },
  },
  "progress": {
    "default": {
      name: "progress-default",
      story: "default",
      component: React.lazy(() => import("@/registry/progress/default")),
      file: "registry/progress/default.tsx"
    },
  },
  "spinner": {
    "color": {
      name: "spinner-color",
      story: "color",
      component: React.lazy(() => import("@/registry/spinner/color")),
      file: "registry/spinner/color.tsx"
    },
    "default": {
      name: "spinner-default",
      story: "default",
      component: React.lazy(() => import("@/registry/spinner/default")),
      file: "registry/spinner/default.tsx"
    },
    "sizes": {
      name: "spinner-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/spinner/sizes")),
      file: "registry/spinner/sizes.tsx"
    },
  },
  "table": {
    "bleed": {
      name: "table-bleed",
      story: "bleed",
      component: React.lazy(() => import("@/registry/table/bleed")),
      file: "registry/table/bleed.tsx"
    },
    "default": {
      name: "table-default",
      story: "default",
      component: React.lazy(() => import("@/registry/table/default")),
      file: "registry/table/default.tsx"
    },
    "dense": {
      name: "table-dense",
      story: "dense",
      component: React.lazy(() => import("@/registry/table/dense")),
      file: "registry/table/dense.tsx"
    },
    "grid": {
      name: "table-grid",
      story: "grid",
      component: React.lazy(() => import("@/registry/table/grid")),
      file: "registry/table/grid.tsx"
    },
    "links": {
      name: "table-links",
      story: "links",
      component: React.lazy(() => import("@/registry/table/links")),
      file: "registry/table/links.tsx"
    },
    "overflow": {
      name: "table-overflow",
      story: "overflow",
      component: React.lazy(() => import("@/registry/table/overflow")),
      file: "registry/table/overflow.tsx"
    },
    "striped-links": {
      name: "table-striped-links",
      story: "striped-links",
      component: React.lazy(() => import("@/registry/table/striped-links")),
      file: "registry/table/striped-links.tsx"
    },
    "striped": {
      name: "table-striped",
      story: "striped",
      component: React.lazy(() => import("@/registry/table/striped")),
      file: "registry/table/striped.tsx"
    },
  },
  "tabs": {
    "default": {
      name: "tabs-default",
      story: "default",
      component: React.lazy(() => import("@/registry/tabs/default")),
      file: "registry/tabs/default.tsx"
    },
    "disabled-keys": {
      name: "tabs-disabled-keys",
      story: "disabled-keys",
      component: React.lazy(() => import("@/registry/tabs/disabled-keys")),
      file: "registry/tabs/disabled-keys.tsx"
    },
    "disabled": {
      name: "tabs-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/tabs/disabled")),
      file: "registry/tabs/disabled.tsx"
    },
    "vertical": {
      name: "tabs-vertical",
      story: "vertical",
      component: React.lazy(() => import("@/registry/tabs/vertical")),
      file: "registry/tabs/vertical.tsx"
    },
  },
  "text": {
    "align": {
      name: "text-align",
      story: "align",
      component: React.lazy(() => import("@/registry/text/align")),
      file: "registry/text/align.tsx"
    },
    "color": {
      name: "text-color",
      story: "color",
      component: React.lazy(() => import("@/registry/text/color")),
      file: "registry/text/color.tsx"
    },
    "default": {
      name: "text-default",
      story: "default",
      component: React.lazy(() => import("@/registry/text/default")),
      file: "registry/text/default.tsx"
    },
    "sizes": {
      name: "text-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/text/sizes")),
      file: "registry/text/sizes.tsx"
    },
    "truncate": {
      name: "text-truncate",
      story: "truncate",
      component: React.lazy(() => import("@/registry/text/truncate")),
      file: "registry/text/truncate.tsx"
    },
  },
};
