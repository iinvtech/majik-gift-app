import { Image, View } from "react-native";

import { Flex, Typography } from "./";

const LightWorker = () => {
  return (
    <Flex alignItems="center" gap={9}>
      <Image source={require("@/assets/images/lightworker.png")} />
      <View>
        <Typography size={12}>Cherly</Typography>
        {/* {true && (
          <Typography size={12} light>
            Host
          </Typography>
        )} */}
      </View>
    </Flex>
  );
};

export default LightWorker;
