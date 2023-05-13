import { Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function Paymentdone() {
  return (
    <Box textAlign="center" py={100} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Your Order is placed
      </Heading>
      <Text color={'gray.500'}>
       You will recieve your order within 7 days of interval
      </Text>
    </Box>
  );
}