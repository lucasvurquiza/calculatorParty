import React from 'react';
import { View, Modal, StyleSheet, Dimensions, ViewProps } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ALERT_WIDTH = SCREEN_WIDTH - (SCREEN_WIDTH / 4);

interface FancyProps {
  visible: true;
  icon?: React.ReactNode;
  backgroundColor?: string;
  children: React.ReactNode;
  onRequestClose: () => void;
}

export const FancyAlert = ({ visible, onRequestClose, icon, children, backgroundColor }: FancyProps) => (
  <Modal visible={visible} animationType="fade" transparent onRequestClose={onRequestClose}>
    <View style={styles.container}>
      <View style={[styles.iconCircle, { top: 32, borderColor: backgroundColor || '#FFF' }]}>
        {icon}
      </View>

      <View style={[styles.content, { backgroundColor: backgroundColor || '#FFF' }]}>
        <View style={[styles.iconCircle, { top: -32, borderColor: backgroundColor || '#FFF' }]}>
          {icon}
        </View>

        {children}
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    width: ALERT_WIDTH,
    paddingHorizontal: 8,
    borderRadius: 16,
  },
  iconCircle: {
    height: 64,
    width: 64,
    borderRadius: 32,
    borderWidth: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnPrimary: {
    width: ALERT_WIDTH - 16,
    margin: 8,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
  },
});