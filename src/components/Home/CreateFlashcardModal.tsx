import React, {useState, useCallback} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {color} from '../../styles';
import {homeStrings} from '../../locales';

interface CreateFlashcardModalProps {
  visible: boolean;
  onClose: () => void;
  onCreate: (title: string, description: string) => void;
  modalStyles?: object;
  inputStyles?: object;
  buttonStyles?: object;
}

const CreateFlashcardModal: React.FC<CreateFlashcardModalProps> = React.memo(
  ({visible, onClose, onCreate, modalStyles, inputStyles, buttonStyles}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleCreate = useCallback(() => {
      if (!title.trim()) {
        setError(homeStrings.titleRequired);
        return;
      }
      onCreate(title.trim(), description.trim());
      setTitle('');
      setDescription('');
      setError('');
      onClose();
    }, [title, description, onCreate, onClose]);

    const handleClose = useCallback(() => {
      setTitle('');
      setDescription('');
      setError('');
      onClose();
    }, [onClose]);

    return (
      <Modal transparent visible={visible} animationType="slide">
        <View style={styles.overlay}>
          <View style={[styles.modalContainer, modalStyles]}>
            <Text style={styles.modalTitle}>
              {homeStrings.flashcardCreation}
            </Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TextInput
              style={[styles.input, inputStyles]}
              placeholder={homeStrings.placeholderTitle}
              value={title}
              onChangeText={setTitle}
              accessibilityLabel={homeStrings.placeholderTitle}
            />
            <TextInput
              style={[styles.input, styles.textArea, inputStyles]}
              placeholder={homeStrings.placeholderDescription}
              value={description}
              onChangeText={setDescription}
              multiline
              accessibilityLabel={homeStrings.placeholderDescription}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, buttonStyles]}
                onPress={handleCreate}>
                <Text style={styles.buttonText}>
                  {homeStrings.createButton}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton, buttonStyles]}
                onPress={handleClose}>
                <Text style={styles.buttonText}>
                  {homeStrings.cancelButton}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  },
);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: color.opacityGray,
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: color.primaryBlue,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: color.warning,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  errorText: {
    color: color.danger,
    fontSize: 12,
    marginBottom: 8,
  },
});

export default CreateFlashcardModal;
