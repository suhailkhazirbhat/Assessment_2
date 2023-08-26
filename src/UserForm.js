import React, { useState } from 'react';
import { Button, FormControl, Input, Stack } from '@chakra-ui/react';
import UserInfo from './UserInfo';
import { Card } from './Card';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCard(true);
  };

  return (
    <Stack spacing="4">
      <Card>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <div style={{paddingLeft: "22px", marginTop:"20px", marginButtom:"20px"}}>
        <Button type="submit" colorScheme="blue">
          Show Information
        </Button>
        </div>
      </form>
      {showCard && <UserInfo username={username} />}
      </Card>
    </Stack>
  );
};

export default UserForm;
