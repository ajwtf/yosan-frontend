import { useState } from 'react';

import {
  Button,
  Card,
  DropZone,
  FormLayout,
  Page,
  ResourceItem,
  ResourceList,
  Select,
  Text,
  TextField,
} from '@shopify/polaris';

const ExpenseTracker = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const categories = [
    { label: 'Rent', value: 'rent' },
    { label: 'Food', value: 'food' },
    { label: 'Entertainment', value: 'entertainment' },
    { label: 'Touka', value: 'touka' },
  ];

  const handleAddExpense = () => {
    // Handle form submission logic
  };

  const handleDropZoneDrop = (_dropFiles: File[], acceptedFiles: File[]) =>
    setFile(acceptedFiles[0]);

  const mockExpenseEntries = [
    {
      id: '1',
      amount: '$1500',
      category: 'Rent',
      date: '2024-08-01',
      description: '2024-08-01 Rent',
    },
    {
      id: '2',
      amount: '$300',
      category: 'Food',
      date: '2024-08-02',
      description: 'Costco',
    },
    {
      id: '3',
      amount: '$4500',
      category: 'Touka',
      date: '2024-08-12',
      description: 'Touka mouth surgery',
    },
  ];

  return (
    <Page>
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

          <DropZone onDrop={handleDropZoneDrop}>
            {file && <DropZone.FileUpload actionTitle={file.name} />}
            {!file && <DropZone.FileUpload />}
          </DropZone>

          <Button onClick={handleAddExpense}>Add Expense</Button>
        </FormLayout>
      </Card>

      <Card>
        <Text as='h3' variant='headingMd'>
          Expense Detail
        </Text>

        <ResourceList
          resourceName={{ singular: 'expense', plural: 'expenses' }}
          items={mockExpenseEntries}
          renderItem={(item) => {
            const { id, amount, category, date, description } = item;

            return (
              <ResourceItem
                id={id}
                accessibilityLabel={`View details for ${description}`}
                onClick={() =>
                  console.log(
                    `Expense Detail: ${id} | ${date} | ${category} | ${description} | ${amount}`,
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

export default ExpenseTracker;
