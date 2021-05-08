import React from "react";
import { Title } from "../../atoms/text/Text";
import { AnchorContact, ContainerContact } from "./contact.style";
import Writing from "../../../copywriting/Writing";
import {
  RowResponsive,
  ColumnLeft,
  ColumnRight,
} from "../../../templates/Layouts.style";
import ItemContact from "../../../organisms/contact/item/ItemContact";
import FormContact from "../../../organisms/contact/form/FormContact";

const Contact: React.FC = () => {
  const texts = Writing();

  return (
    <>
      <AnchorContact id="contact" />
      <ContainerContact data-aos="fade-up">
        <Title>{texts.contact.title}</Title>
        <RowResponsive style={{ marginTop: 40 }}>
          <ColumnLeft
            style={{
              width: "auto",
              minHeight: "200px",
              marginBottom: 40,
            }}
          >
            <ItemContact
              title={texts.contact.location.title}
              description={texts.contact.location.info}
              iconName={"fas fa-map-marker-alt"}
              containerStyle={{ marginBottom: 40 }}
            />
            <ItemContact
              title={texts.contact.email.title}
              description={texts.contact.email.info}
              iconName={"far fa-envelope"}
              containerStyle={{ marginBottom: 40 }}
            />
            <ItemContact
              title={texts.contact.linkedin.title}
              description={texts.contact.linkedin.info}
              iconName={"fab fa-linkedin-in"}
            />
          </ColumnLeft>
          <ColumnRight>
            <FormContact />
          </ColumnRight>
        </RowResponsive>
      </ContainerContact>
    </>
  );
};

export default Contact;
