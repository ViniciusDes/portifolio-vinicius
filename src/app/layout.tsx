"use client";
import type { Metadata } from "next";
import { rubik300, rubik500, rubik700 } from "@/assets/fonts";
import Menu from "@/components/Menu";
import { GlobalStyle, Row } from "@/styles";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";
import * as S from "./styles";
import { theme } from "@/styles/theme";
import Header from "@/components/Header";
import { HeaderProvider, useHeader } from "@/hooks/useHeader";
import AWS from "aws-sdk";
import { useEffect } from "react";
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const region = process.env.NEXT_PUBLIC_AWS_REGION;
  const accessKeyId = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY;

  AWS.config.update({
    region: region,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  });

  const dynamoDB = new AWS.DynamoDB.DocumentClient();

  useEffect(() => {
    if (typeof window == "undefined") return;
    const params = {
      TableName: "USER_ACCESS",
      Item: {
        ID: Math.random(), // substitua com o valor real
        TIME_ACESS: new Date().toString(),
        LANGUAGE: window.navigator.language,
        PLATFORM: window.navigator.platform ?? "",
        BROWSER_VERSION: window.navigator.appVersion,
        LOCATION_DATA: "",
      },
    };

    const setUserDataAccess = async () => {
      const request = await fetch(
        "https://ipinfo.io/json?token=f9b20befc2066a"
      );
      const jsonResponse = await request.json();
      params.Item.LOCATION_DATA = JSON.stringify(jsonResponse);
      console.log(window);
      dynamoDB.put(params, (err, data) => {
        if (err) {
          console.error("Erro ao enviar dados para o DynamoDB", err);
        } else {
          console.log("Dados enviados com sucesso para o DynamoDB", data);
        }
      });
    };
    setUserDataAccess();
  }, []);

  return (
    <html
      lang="en"
      className={`${rubik300.variable} ${rubik700.variable} ${rubik500.variable}`}
    >
      <body>
        <ThemeProvider theme={theme}>
          <StyledComponentsRegistry>
            <GlobalStyle whiteColor />
            <Header />
            <Menu />

            <S.WrapperPage>{children}</S.WrapperPage>
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <HeaderProvider>
      <RootLayout>{children}</RootLayout>
    </HeaderProvider>
  );
}
