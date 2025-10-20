import { Stack, Text, Center } from '@mantine/core';



export default function AboutPage() {

  return (
      <Center
        w={350}
        mt={90}
        style={{
          minHeight: '100px',
          background: '#fff',
          margin: 'auto',
          position: 'relative',
          borderRadius: 12,
          padding: 0,
        }}
        >
          <Stack m={16}  pb={16} pr={8} pl={8}>
              <Text
                style={{
                  fontFamily: 'OpenSansSemiBold',
                  fontSize: '26px',
                  textAlign: 'left',
                }}
              >
                Виктория Лобанова
              </Text>

              <Text
                style={{
                  fontFamily: 'OpenSansRegular',
                  fontSize: '16px',
                  textAlign: 'left',
                }}
              >
                Привет! Я Frontend-разработчкик. Пишу приложения на React + TypeScript + Redux ToolKit.
              </Text>
          </Stack>

        </Center>
    
  );
}