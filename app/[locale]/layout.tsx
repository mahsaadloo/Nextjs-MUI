import Header from "../components/header";

export default function LocaleLayout({
    children,
    params: {locale}
  }: {
    children: React.ReactNode;
    params: {locale: string};
  }) {
    return (
      <html lang={locale}>
        <body>
          <Header />
          <div>{children}</div>
        </body>
      </html>
    );
  }