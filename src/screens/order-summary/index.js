import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {BackButton, Container, Flex, Typography} from '../../components';
import {NotificationIcon} from '../../assets';
import {sizer} from '../../helpers';
import {COLORS} from '../../../globals';

const OrderSummary = () => {
  return (
    <ScrollView>
      <Container>
        <BackButton title="Order Summary" Icon={NotificationIcon} />

        <Flex
          justifyContent="space-between"
          alignItems="center"
          style={{
            height: sizer.moderateVerticalScale(42),
            borderBottomColor: COLORS.borderV1,
            borderBottomWidth: sizer.moderateScale(1),
          }}>
          <Typography size={14} light>
            Product Name
          </Typography>
          <Typography size={14}>Product Name</Typography>
        </Flex>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          style={{
            height: sizer.moderateVerticalScale(42),
            borderBottomColor: COLORS.borderV1,
            borderBottomWidth: sizer.moderateScale(1),
          }}>
          <Typography size={14} light>
            Product Name
          </Typography>
          <Typography size={14}>Product Name</Typography>
        </Flex>

        <Typography size={14} mT={19} light>Shipping Adress</Typography>
      </Container>
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({});
