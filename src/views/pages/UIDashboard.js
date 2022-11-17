import React, { useState, useEffect } from "react";
import { Row, Col, List, Avatar, message } from "antd";
import { Card } from "react-bootstrap";
import VirtualList from "rc-virtual-list";
import { InfoCircleTwoTone } from "@ant-design/icons";
import AreaChartWrapper from "../compoenents/Chart/AreaChartWrapper";
import RadarChartWrapper from "../compoenents/Chart/RadarChartWrapper";
import { getDefaultValue } from "src/utils/utils";

const UIDashboard = () => {
  const [data, setData] = useState([]);
  const [cardList, setCardList] = useState([]);
  const ConstantHeight = 670;

  useEffect(() => {
    appendData();
  }, []);

  useEffect(() => {
    setCardList([
      {
        title: "SUMMARY",
        value: getDefaultValue(5672),
        subTitle: "14% Inc.",
        color: "#289efa",
        textLabel: "Summary"
      },
      {
        title: "INCOME",
        value: getDefaultValue(5672),
        subTitle: "14% Inc.",
        color: "#ffc000",
        textLabel: "Income"
      },
      {
        title: "EXPENSES",
        value: getDefaultValue(5672),
        subTitle: "14% Inc.",
        color: "#ff7948",
        textLabel: "Expenses"
      }
    ]);
  }, []);

  const appendData = () => {
    let fakeUrl =
      "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";

    fetch(fakeUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        // message.success(`${body.results.length} more items loaded!`);
      });
  };

  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ConstantHeight
    ) {
      appendData();
    }
  };

  return (
    <div style={{ padding: " 10px" }}>
      <Row gutter={[16, 0]} className="mt-4">
        <Col xl={18} md={24}>
          <Row gutter={[16, 16]}>
            {cardList.map((item) => {
              return (
                <Col xl={8} lg={8} md={12} sm={24}>
                  <Card style={{ minHeight: "130px", borderRadius: "20px" }}>
                    <Card.Body>
                      <Row>
                        <Col xl={14} lg={24} sm={12}>
                          <h5 style={{ color: item?.color }}>{item?.title}</h5>
                          <h2> 5,672</h2>
                          <span
                            style={{
                              fontWeight: "bold",
                              color: item?.color,
                              fontSize: "16px"
                            }}
                          >
                            14% Inc.
                          </span>
                        </Col>
                        <Col xl={10} lg={24} sm={12}>
                          <RadarChartWrapper
                            colorLine={item?.color}
                            textLabel={item?.textLabel}
                          />
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}

            <Col lg={24} md={24}>
              <Card style={{ borderRadius: "20px" }}>
                <Card.Body style={{ minHeight: "510px" }}>
                  <h4>Statement</h4>
                  <AreaChartWrapper />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col xl={6} md={24}>
          <Card style={{ borderRadius: "20px" }}>
            <Card.Body style={{ minHeight: "745px" }}>
              <h4>Community</h4>
              <List>
                <VirtualList
                  data={data}
                  height={ConstantHeight}
                  itemHeight={47}
                  itemKey="email"
                  onScroll={onScroll}
                >
                  {(item) => (
                    <List.Item key={item.email}>
                      <List.Item.Meta
                        avatar={<Avatar src={item.picture.large} />}
                        title={
                          <span href="https://ant.design">
                            {item.name.first} {item.name.last}
                          </span>
                        }
                        description={item.email}
                      />
                      <InfoCircleTwoTone style={{ fontSize: "24px" }} />
                    </List.Item>
                  )}
                </VirtualList>
              </List>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UIDashboard;
