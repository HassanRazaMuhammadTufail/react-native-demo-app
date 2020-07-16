import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextInput from '../TextInput';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';

export default function AppFormField({name, width, ...otherProps}) {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
  return (
    <>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
