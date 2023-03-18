import { GetProps } from "tamagui";

import { Box } from "./Box";

export type CenterProps = {
  children?: React.ReactNode;
} & GetProps<typeof Box>;

export const Center = (props: CenterProps) => (
  <Box display="flex" alignItems="center" justifyContent="center" {...props}>
    {props.children}
  </Box>
);
