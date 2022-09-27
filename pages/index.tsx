import Layout from "components/Layout";
import Preview from "components/Preview";
import QRForm from "components/QRForm";
import { QRFormData, QR_FORM_DEFAULT_VALUES } from "consts/QRForm";
import Head from "next/head";
import { useCallback, useState } from "react";

export type fieldData = {
  field: string;
  value: string | boolean | number;
};

const Landing = () => {
  const [formData, setFormData] = useState<QRFormData>(QR_FORM_DEFAULT_VALUES);

  const handleFormChange = useCallback(
    (field: fieldData["field"], value: fieldData["value"]) => {
      setFormData({ ...formData, [field]: value });
    },
    [formData]
  );

  return (
    <>
      <Head>
        <title>TigerQR | Create your own QR</title>
      </Head>
      <Layout>
        <QRForm updateForm={handleFormChange} />
        <Preview>{JSON.stringify(formData)}</Preview>
      </Layout>
    </>
  );
};

export default Landing;
