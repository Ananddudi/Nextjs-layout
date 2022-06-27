const initialstore = {
  show_about: false,
  show_work: false,
  show_resorces: false,
  show_pricing: false,
  show_help: false,
  show_submenu: false,
  center: 0,
  // bottom: 0,
  linkName: "",
  openit: false,
};

export const reducer = (state = initialstore, action) => {
  switch (action.type) {
    case "shows": {
      return {
        ...state,
        show_submenu: true,
        center: action.payload.center,
        // bottom: action.payload.bottom,
        linkName: action.payload.title,
      };
    }
    case "hides": {
      return { ...state, show_submenu: false };
    }
    case "showabout": {
      return { ...state, show_about: true };
    }
    case "hideabout": {
      return { ...state, show_about: false };
    }
    case "showwork": {
      return { ...state, show_work: true };
    }
    case "hidework": {
      return { ...state, show_work: false };
    }
    case "showresourece": {
      return { ...state, show_rescources: true };
    }
    case "hideresoureces": {
      return { ...state, show_rescoureces: false };
    }
    case "showpricing": {
      return { ...state, show_pricing: true };
    }
    case "hidepricing": {
      return { ...state, show_pricing: false };
    }
    case "showhelp": {
      return { ...state, show_help: true };
    }
    case "hidehelp": {
      return { ...state, show_help: false };
    }
    case "open": {
      return { ...state, show_submenu: true, openit: true };
    }
    case "close": {
      return { ...state, show_submenu: false, openit: false };
    }
    default: {
      return { ...state };
    }
  }
};
