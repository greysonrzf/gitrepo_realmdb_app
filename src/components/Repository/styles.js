import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 20px;
  border-radius:4px;
  background: #fff;
  margin-bottom: 15px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RepoName = styled.Text`
  color: #888;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-transform: capitalize;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #666;
  margin-top: 5px;
  line-height: 20px;
`;

export const FooterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const Stats = styled.View`
  flex-direction: row;
`;

export const Stat = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;

export const StatCount = styled.Text`
  margin-left: 6px;
`;

export const Refresh = styled.TouchableOpacity``;
