export const cancelSubmitEventNames = {
  cancel: 'cancel',
  submit: 'submit',
  secondary: 'secondary',
};

export const getCancelSubmitEmits = (): string[] => [
  cancelSubmitEventNames.cancel,
  cancelSubmitEventNames.submit,
];

export const getCancelSubmitProps = () => ({
  small: {
    type: Boolean,
    default: () => false,
  },
  showCancel: {
    type: Boolean,
    default: () => false,
  },
  showSubmit: {
    type: Boolean,
    default: () => true,
  },
  showSecondary: {
    type: Boolean,
    default: () => false,
  },
  secondaryText: {
    type: String,
    default: () => '',
  },
  cancelText: {
    type: String,
    default: () => 'Cancel',
  },
  submitText: {
    type: String,
    default: () => 'OK',
  },
});
