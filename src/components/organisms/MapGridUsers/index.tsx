import React, { useState, useEffect } from 'react';
import styled from '@Styles/styled';
import axios from 'axios';
import Image from '@Atoms/Image';

type MapGridUsersProps = {
  width?: string;
};
const StyledContainer = styled.div<MapGridUsersProps>`
  width: 490px;
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  @media (max-width: 1140px) {
    width: 470px;
    height: 320px;
  }
  @media (max-width: 720px) {
    width: 340px;
    height: 230px;
  }
`;

const StyledMapGridUsers = styled.div<MapGridUsersProps>`
  width: 100%;
  height: 100%;
  background: url('https://svgshare.com/i/PN1.svg') center/cover no-repeat;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 0px;
  grid-auto-rows: auto;
  padding: 7% 0% 8% 7%;
  div {
    width: 55px;
    height: 55px;
    @media (max-width: 1140px) {
      width: 50px;
      height: 50px;
    }
    @media (max-width: 720px) {
      width: 35px;
      height: 35px;
    }
    margin: 0px;
    &:nth-of-type(-2n + 4) {
      transform: translateY(20px);
    }
    &:nth-of-type(7) {
      transform: translateY(20px);
    }
    &:nth-of-type(9) {
      transform: translateY(20px);
    }
    &:nth-of-type(2n + 12) {
      transform: translateY(20px);
    }
  }
`;

const MapGridUsers: React.FC<MapGridUsersProps> = () => {
  const initialState = [
    {
      id: 0,
      name: 'Fede',
      username: 'Fede',
      email: 'elfedeomg@gmail.com',
      imagePath: '',
      userDescription: ''
    }
  ];

  const [listUsers, setListUsers] = useState(initialState);
  useEffect(() => {
    axios
      .get(`https://api/getusers`)
      .then((res) => {
        const persons = res.data;
        setListUsers(persons);
      })
      .catch(() => {
        setListUsers(initialState);
      });
  });

  return (
    <StyledContainer>
      <StyledMapGridUsers>
        {listUsers.slice(0, 15).map((user) => (
          <Image
            key={user.id}
            variant="round"
            image={
              user.imagePath === ''
                ? 'https://res.cloudinary.com/design-code-mx/image/upload/v1596616586/ReadMeFaztCommunity/faztcommunity_xbhnox.svg'
                : user.imagePath
            }
          />
        ))}
      </StyledMapGridUsers>
    </StyledContainer>
  );
};

export default MapGridUsers;
