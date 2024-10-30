import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IJoinExpeditionModal {
  isVisible: boolean;
  onClose: () => void;
  onBack: () => void;
}

const JoinExpeditionModal = ({
  isVisible,
  onClose,
  onBack,
}: IJoinExpeditionModal) => {
  const {bottom} = useSafeAreaInsets();

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.container}>
      <View style={[styles.contentContainer, {paddingBottom: bottom + 40}]}>
        <Text style={styles.title}>Insufficient experience</Text>
        <Text style={styles.description}>
          To join this expedition, you need more experience. Try completing more
          training sessions.
        </Text>
        <Pressable
          hitSlop={5}
          style={({pressed}) => [
            styles.buttonContainer,
            pressed && styles.onPress,
          ]}
          onPress={onBack}>
          <Text style={styles.buttonText}>Back to expeditions</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

export default JoinExpeditionModal;
