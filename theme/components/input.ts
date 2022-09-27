import type { ComponentStyleConfig } from "@chakra-ui/theme";

const InputConfig: ComponentStyleConfig = {
  variants: {
    outline: {
      field: {
        color: "black",
        bg: "white",
        _hover: { bg: "white" },
      },
    },
  },
  sizes: {
    sm: {
      borderRadius: "6px",
    },
  },
  defaultProps: {
    variant: "outline",
    size: "sm",
  },
};

export default InputConfig;
