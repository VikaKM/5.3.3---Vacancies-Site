import { Container, Grid, Stack, Paper } from '@mantine/core';
import SearchSection from '../components/SearchSection';
import CitySelect from '../components/CitySelect';
import SkillsForm from '../components/SkillsForm';
import VacancyList from '../components/VacansyList';

export default function MainPage() {
  return (
    <Container size='lg' py='md' mt={20}>
      {/* Верхняя часть — поиск */}
      <SearchSection />

      {/* линия декоративная */}
      <div
        style={{
          width: '100vw',               
          marginLeft: 'calc(-50vw + 50%)', 
          height: 1,                     
          backgroundColor: '#dee2e6',   
          marginTop: 0,
          marginBottom: 5,
        }}
      />


      <Grid mt='md' gutter='md'>
        {/* Левая колонка: Skills + City */}
        <Grid.Col span={4}>
          <Stack gap='sm'>
            {/* Обёртка с фиксированными размерами */}
            <Paper
              shadow='xs'
              p='sm'
              style={{ 
                width: '320px',
                height: '300px',
                display: 'flex',
                flexDirection: 'column', 
                ustifyContent: 'space-between' 
              }}
            >
              <SkillsForm />
              <CitySelect />
            </Paper>
          </Stack>
        </Grid.Col>

        {/* Правая колонка: список вакансий */}
        <Grid.Col span={8}>
          <VacancyList/>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

