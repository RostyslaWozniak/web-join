export const OfferEmail = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffffff",
        color: "#455a63",
      }}
    >
      <table
        width="100%"
        cellSpacing="0"
        cellPadding="0"
        style={{ backgroundColor: "#ffffff", border: 0 }}
      >
        <tr>
          <td align="center">
            <table
              width="600px"
              cellSpacing="0"
              cellPadding="0"
              style={{
                background: "#ffffff",
                margin: "20px auto",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px #455a63",
              }}
            >
              <Header />
              <ServicesSection />
              <Footer />
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <tr
        style={{
          backgroundColor: "#e9fbfa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <td>
          <svg
            width="200"
            height="43"
            viewBox="0 0 200 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginBlock: "10px" }}
          >
            <path
              d="M18.9058 3.5L2.98535 21.5L18.9058 39.5"
              stroke="#31D6DE"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29.1126 34.5L21.5312 8.31818H28.4894L32.42 25.4744H32.6362L37.1266 8.31818H42.7999L47.2903 25.5128H47.5065L51.4499 8.31818H58.3952L50.8266 34.5H44.7589L40.065 18.6222H39.8615L35.1677 34.5H29.1126ZM67.961 34.8707C65.9173 34.8707 64.1533 34.4659 62.6694 33.6562C61.1937 32.8381 60.0574 31.6747 59.2602 30.1662C58.4716 28.6491 58.0772 26.8466 58.0772 24.7585C58.0772 22.7301 58.4758 20.9574 59.2729 19.4403C60.0701 17.9148 61.1937 16.7301 62.6439 15.8864C64.094 15.0341 65.8028 14.608 67.7703 14.608C69.161 14.608 70.433 14.8253 71.5864 15.2599C72.7397 15.6946 73.7361 16.3381 74.5757 17.1903C75.4152 18.0426 76.0683 19.0952 76.5346 20.348C77.0011 21.5923 77.2342 23.0199 77.2342 24.6307V26.1903H60.2524V22.5597H71.4465C71.438 21.8949 71.2811 21.3026 70.9758 20.7827C70.6705 20.2628 70.2508 19.858 69.7164 19.5682C69.1907 19.2699 68.5844 19.1207 67.8974 19.1207C67.2021 19.1207 66.5787 19.2784 66.0276 19.5938C65.4763 19.9006 65.0396 20.3224 64.7173 20.8594C64.395 21.3878 64.2255 21.9886 64.2085 22.6619V26.3565C64.2085 27.1577 64.3654 27.8608 64.6791 28.4659C64.9929 29.0625 65.4381 29.527 66.0148 29.8594C66.5914 30.1918 67.2784 30.358 68.0755 30.358C68.6268 30.358 69.1271 30.2812 69.5765 30.1278C70.026 29.9744 70.4118 29.7486 70.7341 29.4503C71.0563 29.152 71.298 28.7855 71.4592 28.3509L77.1707 28.517C76.9332 29.804 76.4116 30.9247 75.6061 31.8793C74.8089 32.8253 73.7616 33.5625 72.4641 34.0909C71.1666 34.6108 69.6656 34.8707 67.961 34.8707ZM80.4112 34.5V8.31818H86.6316V18.2259H86.7587C87.0131 17.6293 87.3735 17.054 87.84 16.5C88.3148 15.946 88.917 15.4943 89.6463 15.1449C90.3841 14.7869 91.2661 14.608 92.2921 14.608C93.649 14.608 94.9168 14.9659 96.0956 15.6818C97.2828 16.3977 98.2411 17.5014 98.9705 18.9929C99.7002 20.4844 100.064 22.3849 100.064 24.6946C100.064 26.919 99.7121 28.7812 99.0086 30.2812C98.3131 31.7812 97.3718 32.9062 96.1846 33.6562C95.0059 34.4062 93.6956 34.7812 92.254 34.7812C91.2703 34.7812 90.418 34.6193 89.6972 34.2955C88.9763 33.9716 88.37 33.5455 87.8781 33.017C87.3947 32.4886 87.0216 31.9219 86.7587 31.3168H86.568V34.5H80.4112ZM86.5043 24.6818C86.5043 25.7386 86.6443 26.6591 86.9241 27.4432C87.2124 28.2273 87.6237 28.8366 88.158 29.2713C88.7007 29.6974 89.3495 29.9105 90.1042 29.9105C90.8675 29.9105 91.5162 29.6974 92.0505 29.2713C92.5847 28.8366 92.9876 28.2273 93.2589 27.4432C93.5387 26.6591 93.6787 25.7386 93.6787 24.6818C93.6787 23.625 93.5387 22.7088 93.2589 21.9332C92.9876 21.1577 92.5847 20.5568 92.0505 20.1307C91.5247 19.7045 90.8759 19.4915 90.1042 19.4915C89.341 19.4915 88.6922 19.7003 88.158 20.1179C87.6237 20.5355 87.2124 21.1321 86.9241 21.9077C86.6443 22.6832 86.5043 23.608 86.5043 24.6818ZM113.907 8.31818H120.115V26.4205C120.106 28.1165 119.704 29.5994 118.906 30.8693C118.109 32.1307 117.007 33.1108 115.6 33.8097C114.2 34.5085 112.58 34.858 110.74 34.858C109.112 34.858 107.632 34.5724 106.3 34.0014C104.978 33.4304 103.922 32.544 103.133 31.3423C102.353 30.1406 101.967 28.6023 101.976 26.7273H108.246C108.272 27.4006 108.4 27.9759 108.629 28.4531C108.866 28.9219 109.193 29.2756 109.608 29.5142C110.024 29.7528 110.519 29.8722 111.096 29.8722C111.698 29.8722 112.207 29.7443 112.623 29.4886C113.039 29.2244 113.352 28.8366 113.564 28.3253C113.785 27.8139 113.899 27.179 113.907 26.4205V8.31818ZM133.189 34.8707C131.136 34.8707 129.373 34.4489 127.897 33.6051C126.43 32.7528 125.297 31.5682 124.5 30.0511C123.712 28.5256 123.317 26.7571 123.317 24.7457C123.317 22.7259 123.712 20.9574 124.5 19.4403C125.297 17.9148 126.43 16.7301 127.897 15.8864C129.373 15.0341 131.136 14.608 133.189 14.608C135.24 14.608 137.001 15.0341 138.467 15.8864C139.943 16.7301 141.075 17.9148 141.864 19.4403C142.661 20.9574 143.059 22.7259 143.059 24.7457C143.059 26.7571 142.661 28.5256 141.864 30.0511C141.075 31.5682 139.943 32.7528 138.467 33.6051C137.001 34.4489 135.24 34.8707 133.189 34.8707ZM133.227 30.1534C133.973 30.1534 134.605 29.9233 135.122 29.4631C135.64 29.0028 136.034 28.3636 136.305 27.5455C136.585 26.7273 136.725 25.7812 136.725 24.7074C136.725 23.6165 136.585 22.6619 136.305 21.8438C136.034 21.0256 135.64 20.3864 135.122 19.9261C134.605 19.4659 133.973 19.2358 133.227 19.2358C132.455 19.2358 131.802 19.4659 131.267 19.9261C130.742 20.3864 130.339 21.0256 130.059 21.8438C129.788 22.6619 129.652 23.6165 129.652 24.7074C129.652 25.7812 129.788 26.7273 130.059 27.5455C130.339 28.3636 130.742 29.0028 131.267 29.4631C131.802 29.9233 132.455 30.1534 133.227 30.1534ZM146.246 34.5V14.8636H152.466V34.5H146.246ZM149.363 12.5753C148.489 12.5753 147.739 12.2855 147.111 11.706C146.483 11.1179 146.17 10.4105 146.17 9.58381C146.17 8.76562 146.483 8.06676 147.111 7.48722C147.739 6.89915 148.489 6.60511 149.363 6.60511C150.244 6.60511 150.995 6.89915 151.615 7.48722C152.241 8.06676 152.556 8.76562 152.556 9.58381C152.556 10.4105 152.241 11.1179 151.615 11.706C150.995 12.2855 150.244 12.5753 149.363 12.5753ZM162.646 23.3011V34.5H156.426V14.8636H162.341V18.4688H162.557C162.99 17.267 163.727 16.3253 164.77 15.6435C165.814 14.9531 167.055 14.608 168.497 14.608C169.871 14.608 171.062 14.919 172.072 15.5412C173.089 16.1548 173.878 17.0156 174.438 18.1236C175.006 19.223 175.286 20.5099 175.277 21.9844V34.5H169.057V23.2116C169.065 22.1207 168.79 21.2685 168.231 20.6548C167.679 20.0412 166.911 19.7344 165.928 19.7344C165.275 19.7344 164.698 19.8793 164.198 20.169C163.706 20.4503 163.324 20.8551 163.053 21.3835C162.79 21.9119 162.654 22.5511 162.646 23.3011Z"
              fill="url(#paint0_linear_174_91)"
            />
            <path
              d="M180.1 39.5L197.015 21.5L180.1 3.5"
              stroke="#31DEAB"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_174_91"
                x1="175.278"
                y1="20.7379"
                x2="21.5312"
                y2="20.7379"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#31DEAB" />
                <stop offset="1" stopColor="#31D6DE" />
              </linearGradient>
            </defs>
          </svg>
        </td>
      </tr>
      <tr>
        <td align="center">
          <h1 style={{ color: "#455a63", margin: "10px 0" }}>
            Nowoczesne strony internetowe 🚀
          </h1>
          <p style={{ color: "#455a63", fontSize: "16px" }}>
            Szybkie, bezpieczne i zoptymalizowane pod SEO. Sprawdź ofertę!
          </p>
        </td>
      </tr>
    </>
  );
};

const ServicesSection = () => {
  return (
    <>
      <tr>
        <td>
          <ServiceCard
            title="🌐 Strony internetowe"
            description="Dostosowane do Twojego biznesu – nowoczesne i responsywne."
            items={[
              {
                title: "Strona wizytówka",
                description:
                  "prosta strona z najważniejszymi informacjami o Twojej firmie.",
                price: "299 zł",
                oldPrice: "500 zł",
              },
              {
                title: "Landing Page",
                description:
                  "pojedyncza strona do promocji produktu lub usługi, zoptymalizowana pod konwersję.",
                price: "599 zł",
                oldPrice: "800 zł",
              },
              {
                title: "Strona firmowa",
                description:
                  'pełna strona z kilkoma podstronami: "O nas", "Usługi", "Kontakt".',
                price: "1500 zł",
              },
            ]}
          />
          <ServiceCard
            title="🛒 Sklepy internetowe"
            description="Profesjonalne sklepy z integracją płatności."
            items={[
              {
                title: "Podstawowy sklep",
                description: "do 10 produktów, z systemem zamówień.",
                price: "2499 zł",
                oldPrice: "3000 zł",
              },
              {
                title: "Rozbudowany sklep",
                description:
                  "większy katalog produktów, filtrowanie, analityka.",
                price: "5000 zł",
              },
            ]}
          />
          <ServiceCard
            title="📝 Blogi i strony contentowe"
            description="Z łatwym zarządzaniem treścią."
            items={[
              {
                title: "Prosty blog",
                description:
                  "możliwość dodawania artykułów, optymalizacja SEO.",
                price: "1200 zł",
              },
              {
                title: "Zaawansowany blog",
                description: "kategorie, tagi, lepsza nawigacja.",
                price: "2000 zł",
              },
            ]}
          />
          <ServiceCard
            title="⚙️ Dodatkowe usługi"
            description="Zadbam o SEO, płatności i wsparcie techniczne."
            items={[
              {
                title: "SEO i optymalizacja",
                description: "popraw ranking w Google.",
                price: "300 zł",
              },
              {
                title: "Integracja z płatnościami",
                description: "dodanie bramki płatności do strony lub sklepu.",
                price: "400 zł",
              },
              {
                title: "Wsparcie techniczne",
                description: "aktualizacje i monitoring.",
                price: "100 zł/miesiąc",
              },
            ]}
          />
          <CTAButton />
        </td>
      </tr>
    </>
  );
};
const ServiceCard = ({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    price: string;
    oldPrice?: string;
  }[];
}) => {
  return (
    <table
      width="100%"
      cellSpacing="0"
      cellPadding="10"
      style={{ background: "#e9fbfa", marginTop: "20px", borderRadius: "10px" }}
    >
      <tr>
        <td>
          <h2 style={{ color: "#455a63", marginBottom: "5px" }}>{title}</h2>
          <p style={{ color: "#666", fontSize: "14px", margin: 0 }}>
            {description}
          </p>
          <ul
            style={{
              paddingLeft: "20px",
              color: "#455a63",
              display: "grid",
              gap: "12px",
            }}
          >
            {items.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong> – {item.description}{" "}
                {item.oldPrice && (
                  <>
                    (od{" "}
                    <span
                      style={{ textDecoration: "line-through", color: "red" }}
                    >
                      {item.oldPrice}
                    </span>{" "}
                    <strong>{item.price}</strong>)
                  </>
                )}
                {!item.oldPrice && `(od ${item.price})`}
              </li>
            ))}
          </ul>
        </td>
      </tr>
    </table>
  );
};

const CTAButton = () => {
  return (
    <table
      width="100%"
      cellSpacing="0"
      cellPadding="10"
      style={{ marginTop: "20px" }}
    >
      <tr>
        <td align="center">
          <a
            href="https://www.webjoin.pl/join"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(to right, #31d5dd, #6ce6b9)",
              color: "#ffffff",
              textDecoration: "none",
              padding: "12px 24px",
              borderRadius: "50px",
              fontSize: "20px",
            }}
          >
            Skontaktuj się!
          </a>
        </td>
      </tr>
    </table>
  );
};

const Footer = () => {
  return (
    <tr>
      <td
        align="center"
        style={{ padding: "20px", color: "#455a63", fontSize: "12px" }}
      >
        Web Join |{" "}
        <a
          href="https://www.webjoin.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.webjoin.pl
        </a>{" "}
        | <a href="mailto:contact@webjoin.pl">contact@webjoin.pl</a> |{" "}
        <a href="tel:+48798582849">tel. +48 798 582 849</a>
        <br />
        Masz pytania? Chętnie pomogę!
      </td>
    </tr>
  );
};
