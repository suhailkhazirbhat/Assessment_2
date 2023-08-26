import React, { useState } from 'react';
import { Button, FormControl, Input, Stack } from '@chakra-ui/react';
import UserInfo from './UserInfo';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCard(true);
  };

  return (
    <Stack spacing="4">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <div style={{margin:"auto"}}>
        <Button type="submit" colorScheme="blue">
          Show Information
        </Button>
        </div>
      </form>
      {showCard && <UserInfo username={username} />}
    </Stack>
  );
};

export default UserForm;
