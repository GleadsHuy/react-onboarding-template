import style from "./Index.module.scss";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Title from "components/onboarding/atoms/Title";
import Description from "components/onboarding/atoms/Description";
import axios from "axios";

export default function SelectService(params) {
  const [promotion, setPromotion] = useState(false);
  const router = useRouter();

  const handleClick = (type) => {
    window.localStorage.setItem("layout", JSON.stringify({ type: type }));
    if (type === "incorporation") {
      let data = JSON.parse(window.localStorage.getItem("customer"));
      window.localStorage.setItem(
        "customer",
        JSON.stringify({ ...data, promotion_code: router.query.promotion_code })
      );
    } else {
      let customer = JSON.parse(window.localStorage.getItem("customer"));
      if (customer?.signature?.signature) {
        axios.put(
          `${process.env.NEXT_PUBLIC_ORDER_API_ENDPOINT}/api/onboarding/order/client/${customer?.signature?.signature}`,
          {
            contact_from_id: 48
          }
        );
      }
    }
  };

  useEffect(() => {
    let data_onboarding = JSON.parse(
      window.localStorage.getItem("data_onboarding")
    );
    if (router.isReady) {
      let data_customer = JSON.parse(window.localStorage.getItem("customer"));
      if (data_customer && data_customer.promotion_code) {
        delete data_customer.promotion_code;
        window.localStorage.setItem("customer", JSON.stringify(data_customer));
      }
      if (router.query.signature && router.query.promotion_code) {
        axios
          .get(
            `${process.env.NEXT_PUBLIC_ORDER_API_ENDPOINT}/api/onboarding/order/client/${router.query.signature}`
          )
          .then((response) => {
            let myData = {
              first_name: response?.data?.data?.first_name || "",
              email: response?.data?.data?.email || "",
              signature: {
                signature: response?.data?.data?.signature,
              },
            };
            window.localStorage.setItem("customer", JSON.stringify(myData));
            window.localStorage.setItem(
              "data_onboarding",
              JSON.stringify({ incorporation: null, banking: null })
            );
            setPromotion(true);
          })
          .catch((error) => console.log(error));
      } else {
        if (!data_onboarding) {
          router.push("/register");
        }
      }
    }
  }, [router]);

  return (
    <>
      <section className={style.SelectServiceScreen}>
        <Link href="/register">
          <a
            className={`${style.Link} ${style.Header} d-none d-lg-inline-block`}
          >
            Back
          </a>
        </Link>
        <Title
          text="Select service you want to proceed"
          className="mt-0 mt-lg-40"
        />
        <div className={style.Body}>
          <Description>
            Incorporation packages already entail banking option. Should you
            need banking support only, kindly select Banking.
          </Description>
          <div
            className="row mt-4 mt-md-40"
            style={{ marginLeft: "-23px", marginRight: "-23px" }}
          >
            <div className="col-12 col-sm-6" style={{ padding: "0 23px" }}>
              <Link href="/incorporation-country">
                <a
                  className={`d-block text-center position-relative mt-4 mt-md-0 ${style.Package}`}
                  style={{ boxShadow: "0 2px 8px rgb(201 201 201 / 25%)" }}
                  onClick={() => handleClick("incorporation")}
                >
                  {promotion && <div className={style.promotion}>-5%</div>}
                  <img
                    src="/onboarding/custom-public/image/onboarding/incorporation.png"
                    loading="eager"
                    className="mw-100"
                    alt="incorporation"
                  />
                  <h3 className="mt-3 mt-md-4 mb-0 font-weight-bold">
                    INCORPORATION
                  </h3>
                  <p className="mt-3 mt-md-4 bg-white rounded-circle text-primary">
                    {"\u2192"}
                  </p>
                </a>
              </Link>
            </div>
            <div className="col-12 col-sm-6" style={{ padding: "0 23px" }}>
              <Link href="/banking-package">
                <a
                  className={`d-block text-center position-relative mt-4 mt-md-0 ${style.Package}`}
                  style={{ boxShadow: "0 2px 8px rgb(201 201 201 / 25%)" }}
                  onClick={() => handleClick("banking")}
                >
                  <img
                    src="/onboarding/custom-public/image/onboarding/banking.png"
                    loading="eager"
                    className="mw-100"
                    alt="banking"
                  />
                  <h3 className="mt-3 mt-md-4 mb-0 font-weight-bold">
                    BANKING
                  </h3>
                  <p className="mt-3 mt-md-4 bg-white rounded-circle text-primary">
                    {"\u2192"}
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Link href="/register">
        <a className={`${style.Link} d-lg-none`}>Back</a>
      </Link>
    </>
  );
}
