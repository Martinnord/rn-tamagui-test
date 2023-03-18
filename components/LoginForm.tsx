import {
  Button,
  Form,
  H2,
  Input,
  Label,
  Paragraph,
  Text,
  YStack,
  XStack,
  Image,
  Stack,
} from "tamagui";

import { Box } from ".";

export const LoginForm = () => {
  const handleSubmit = () => {};

  return (
    <Box
      p="$4"
      borderRadius="$10"
      space
      px="$5"
      py="$5"
      w={350}
      shadowColor={"#00000020"}
      shadowRadius={26}
      shadowOffset={{ width: 0, height: 4 }}
      bg="$background"
    >
      <YStack space="$2.5">
        <YStack space="$4">
          <H2 fow="800">Log in to your account</H2>
          <XStack space jc={"space-evenly"} theme="light">
            {/* 3 buttons, for google, apple, discord */}
            <Button
              size="$5"
              onPress={() => {}}
              hoverStyle={{ opacity: 0.8 }}
              focusStyle={{ scale: 0.95 }}
              borderColor="$gray8Light"
            >
              <Image
                src="https://qwvsfvhphdefqfyuuhlb.supabase.co/storage/v1/object/public/logos/Google%20logo.png"
                width={20}
                height={20}
              />
            </Button>
            <Button
              size="$5"
              onPress={() => {}}
              hoverStyle={{ opacity: 0.8 }}
              focusStyle={{ scale: 0.95 }}
              borderColor="$gray8Light"
            >
              <Image
                src="https://qwvsfvhphdefqfyuuhlb.supabase.co/storage/v1/object/public/logos/Apple%20logo.png"
                width={22}
                height={22}
                resizeMode="contain"
              />
            </Button>
            <Button
              size="$5"
              onPress={() => {}}
              hoverStyle={{ opacity: 0.8 }}
              focusStyle={{ scale: 0.95 }}
              borderColor="$gray8Light"
            >
              <Image
                src="https://qwvsfvhphdefqfyuuhlb.supabase.co/storage/v1/object/public/logos/Discord%20logo.png"
                width={25}
                height={22}
                resizeMode="contain"
              />
            </Button>
          </XStack>
          <XStack ai="center" width="100%" jc="space-between">
            <Stack h="$0.25" bg="black" w="$10" opacity={0.1} />
            <Paragraph size="$3" opacity={0.5}>
              or
            </Paragraph>
            <Stack h="$0.25" bg="black" w="$10" opacity={0.1} />
          </XStack>
        </YStack>

        <Form onSubmit={handleSubmit}>
          <YStack mb="$6">
            <Label>Enter your email</Label>
            <Input size="$4" placeholder="Enter your email" />
            <Label>Password</Label>
            <Input
              size="$4"
              placeholder="*******"
              textContentType="password"
              secureTextEntry
            />
          </YStack>

          <Form.Trigger>
            <Button
              themeInverse
              onPress={() => {}}
              pressStyle={{ scale: 0.975 }}
            >
              Sign in
            </Button>
          </Form.Trigger>
        </Form>
        <XStack space="$1.5" mt="$3">
          <Text>Don't have an account?</Text>
          <Text color="$blue10">Sign up</Text>
        </XStack>
      </YStack>
    </Box>
  );
};
