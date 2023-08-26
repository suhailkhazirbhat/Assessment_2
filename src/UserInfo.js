import React, { useEffect, useState } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import { Spinner } from '@chakra-ui/react'
const UserInfo = ({ username }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [username]);

  if (!userData) {
    return  <div style={{paddingLeft: "70px", marginTop:"20px", marginButtom:"20px"}}><Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  /></div>;
  }

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
      <Image src={userData.avatar_url} alt={`${username}'s avatar`} borderRadius="full" boxSize="150px" mx="auto" />
      <Text fontSize="xl" fontWeight="semibold" mt="4" textAlign="center">
        {userData.name}
      </Text>
      <Text textAlign="center" mb="2">
        Username: {userData.login}
      </Text>
      <Text textAlign="center" mb="2">
        Public Repos: {userData.public_repos}
      </Text>
      <Text textAlign="center" mb="2">
        Public Gists: {userData.public_gists}
      </Text>
      <Text textAlign="center">Profile Created: {new Date(userData.created_at).toLocaleDateString()}</Text>
    </Box>
  );
};

export default UserInfo;
