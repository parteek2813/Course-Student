import './App.css';
import styled from 'styled-components';

import PythonCourseComponent from "./components/PythonCourseComponent";
import SelectPlanComponent from "./components/SelectPlanComponent";
import LearnPythonComponent from './components/LearnPythonComponent';



const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  display:flex;
  align-items:center;
  flex-direction:column;
`;


function App() {
  return (
    <Container>

      <LearnPythonComponent/>
      <PythonCourseComponent/>
      <SelectPlanComponent/>

    </Container>
  );
}

export default App;
