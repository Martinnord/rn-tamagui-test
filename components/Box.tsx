import { View } from "react-native/types";
import { GetProps, styled } from "tamagui";

export const Box = styled(View);

export type BoxProps = GetProps<typeof Box>;
