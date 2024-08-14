import { useState } from 'react';

import {
  Button,
  Card,
  FormLayout,
  Page,
  ResourceItem,
  ResourceList,
  Select,
  Text,
  TextField,
} from '@shopify/polaris';

const IncomeTracker = () => {
  /* const deselectedOptions = useMemo(
    () => [
      { label: 'Salary', value: 'salary' },
      { label: 'Freelance', value: 'freelance' },
      { label: 'Investments', value: 'investments' },
      { label: 'Freelo', value: 'freelo' },
    ],
    [],
  );

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(deselectedOptions);
  const [loading, setLoading] = useState(false);

  const updateText = useCallback(
    (value: string) => {
      setInputValue(value);

      if (!loading) {
        setLoading(true);
      }

      setTimeout(() => {
        if (value === '') {
          setOptions(deselectedOptions);
          setLoading(false);
          return;
        }
        const filterRegex = new RegExp(value, 'i');
        const resultOptions = deselectedOptions.filter((option) =>
          option.label.match(filterRegex),
        );
        setOptions(resultOptions);
        setLoading(false);
      }, 300);
    },
    [deselectedOptions, loading],
  );

  const updateSelection = useCallback(
    (selected: string[]) => {
      const selectedText = selected.map((selectedItem) => {
        const matchedOption = options.find((option) => {
          return option.value.match(selectedItem);
        });
        return matchedOption && matchedOption.label;
      });
      setSelectedOptions(selected);
      setInputValue(selectedText[0] || '');
    },
    [options],
  );

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label='Tags'
      value={inputValue}
      prefix={<Icon source={SearchIcon} />}
      placeholder='Category'
      autoComplete='off'
    />
  );

  const emptyState = (
    <>
      <Icon source={SearchIcon} /> <Text as={'h3'}>No results</Text>
    </>
  ); */

  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const categories = [
    { label: 'Salary', value: 'Salary' },
    { label: 'Freelance', value: 'Freelance' },
    { label: 'Investments', value: 'Investments' },
  ];

  const handleAddIncome = () => {
    // Handle form submission logic
  };

  const mockIncomeEntries = [
    {
      id: '1',
      amount: '$3000',
      category: 'Salary',
      date: '2024-08-01',
      description: '2024-08-01 Salary',
    },
    {
      id: '2',
      amount: '$500',
      category: 'Freelance',
      date: '2024-08-05',
      description: 'Project A',
    },
    {
      id: '3',
      amount: '$700',
      category: 'Investments',
      date: '2024-08-14',
      description: 'Bitcoin',
    },
  ];

  return (
    <Page>
      {/* <Autocomplete
        options={options}
        selected={selectedOptions}
        onSelect={updateSelection}
        emptyState={emptyState}
        loading={loading}
        textField={textField}
      /> */}

      <Card>
        <FormLayout>
          <TextField
            label='Date'
            value={date}
            onChange={setDate}
            type='date'
            autoComplete='off'
          />
          <Select
            label='Category'
            options={categories}
            value={category}
            onChange={setCategory}
          />
          <TextField
            label='Description'
            value={description}
            onChange={setDescription}
            autoComplete='off'
          />
          <TextField
            label='Amount'
            value={amount}
            onChange={setAmount}
            type='number'
            autoComplete='off'
          />

          <Button onClick={handleAddIncome}>Add Income</Button>
        </FormLayout>
      </Card>

      <Card>
        <Text as='h3' variant='headingMd'>
          Income Detail
        </Text>

        <ResourceList
          resourceName={{ singular: 'income', plural: 'incomes' }}
          items={mockIncomeEntries}
          renderItem={(item) => {
            const { id, amount, category, date, description } = item;

            return (
              <ResourceItem
                id={id}
                accessibilityLabel={`View details for ${description}`}
                onClick={() =>
                  console.log(
                    `Income Detail: ${id} | ${date} | ${category} | ${description} | ${amount}`,
                  )
                }
              >
                <Text as='h5'>{date}</Text>
                <Text as='h5'>Category: {category}</Text>
                <Text as='h5'>Description: {description}</Text>
                <Text as='h5'>Amount: {amount}</Text>
              </ResourceItem>
            );
          }}
        />
      </Card>
    </Page>
  );
};

export default IncomeTracker;
