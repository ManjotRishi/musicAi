import React, { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

function CustomDropdown({
  data = [],
  value,
  selector,
  title = '',
  placeholder = '',
  labelKey = 'label',
  subLabelKey = 'subLabel',
  valueKey = 'value',
  disabled = false,
  maxHeight = 250,
  color = '#6B2D2D',
  style,
}) {
  const [open, setOpen] = useState(false);

  const normalizedData = useMemo(() => {
    return data.map((item) => {
      if (typeof item === 'object' && item !== null) {
        return item;
      }
      return { [labelKey]: String(item), [valueKey]: item };
    });
  }, [data, labelKey, valueKey]);

  const selectedItem = normalizedData.find((item) => item[valueKey] === value);
  const selectedLabel = selectedItem ? selectedItem[labelKey] : placeholder;

  const onSelect = (item) => {
    selector?.(item[valueKey], item);
    setOpen(false);
  };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>

      <Pressable
        disabled={disabled}
        onPress={() => setOpen((prev) => !prev)}
        style={({ pressed }) => [
          styles.trigger,
          { backgroundColor: color },
          disabled && styles.triggerDisabled,
          pressed && !disabled && styles.triggerPressed,
        ]}
      >
        <Text numberOfLines={1} style={[styles.triggerLabel, !selectedItem && styles.placeholder]}>
          {selectedLabel}
        </Text>

        <Text style={styles.arrowDown}>{open ? '▲' : '▼'}</Text>
      </Pressable>

      {open && (
        <View style={[styles.menu, { backgroundColor: color }]}>
          <ScrollView style={{ maxHeight }} showsVerticalScrollIndicator={false}>
            {normalizedData?.map((item) => {
              const isSelected = item[valueKey] === value;
              const hasSubLabel = !!item[subLabelKey];
              return (
                <Pressable
                  key={String(item[valueKey])}
                  onPress={() => onSelect(item)}
                  style={({ pressed }) => [
                    styles.option,
                    isSelected && styles.optionSelected,
                    pressed && styles.optionPressed,
                  ]}
                >
                  <View style={styles.optionTextWrap}>
                    <Text style={[styles.optionLabel, isSelected && styles.optionLabelSelected]}>
                      {item[labelKey]}
                    </Text>
                    {hasSubLabel && (
                      <Text style={[styles.optionSubLabel, isSelected && styles.optionSubLabelSelected]}>
                        {item[subLabelKey]}
                      </Text>
                    )}
                  </View>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    zIndex: 40,
  },
  title: {
    color: '#f4e7d0',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    letterSpacing: 0.3,
  },
  trigger: {
    minHeight: 54,
    borderRadius: 16,
    borderWidth: 0,
    paddingHorizontal: 16,
    paddingRight: 42,
    justifyContent: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  triggerDisabled: {
    opacity: 0.55,
  },
  triggerPressed: {
    opacity: 0.9,
  },
  triggerLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  placeholder: {
    color: 'rgba(255, 255, 255, 0.74)',
  },
  arrowDown: {
    position: 'absolute',
    right: 14,
    top: '50%',
    marginTop: -10,
    color: '#111111',
    fontSize: 13,
    fontWeight: '700',
  },
  menu: {
    marginTop: 8,
    borderRadius: 16,
    borderWidth: 0,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.28,
    shadowRadius: 12,
    elevation: 10,
  },
  option: {
    minHeight: 52,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.12)',
  },
  optionTextWrap: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  optionPressed: {
    backgroundColor: 'rgba(0, 0, 0, 0.14)',
  },
  optionSelected: {
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
  },
  optionLabel: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  optionLabelSelected: {
    color: '#ffd59c',
  },
  optionSubLabel: {
    marginTop: 2,
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    fontWeight: '500',
  },
  optionSubLabelSelected: {
    color: 'rgba(255, 213, 156, 0.85)',
  },
});

export default CustomDropdown;
