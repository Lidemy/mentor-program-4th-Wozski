import styled from "styled-components";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { login, getMe } from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { AuthContext } from "../../contexts";
const Container = styled.div`
  width: 80%;
  margin: 0px auto;
`;
const LoginContainer = styled.div`
  border-bottom: 1px solid rgba(0, 12, 34, 0.2);
  padding: 16px;
  text-align: center;
`;
const ErrorMessage = styled.div`
  color: red;
`;
export default function LoginPage() {
  const { setUser } = useContext(AuthContext);
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const handleSubmit = (e) => {
    setErrorMessage(null);
    login(username, password).then((data) => {
      // 登入失敗
      if (data.ok === 0) {
        return setErrorMessage(data.message);
      }
      setAuthToken(data.token);
      getMe().then((response) => {
        if (response.ok !== 1) {
          setAuthToken(null);
          return setErrorMessage(response.toString());
        }
        setUser(response.data);
        history.push("/");
      });
    });
  };
  return (
    <Container>
      <LoginContainer>
        <form onSubmit={handleSubmit}>
          <div>
            username:{" "}
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button>登入</button>
        </form>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </LoginContainer>
    </Container>
  );
}
