import React from "react";
import Header5 from "../Header5/Header5";
import "antd/dist/antd.css";
import { Collapse } from "antd";
import "./Faq.css"
function Faq() {
  const { Panel } = Collapse;
  const text1 = (
    <p style={{ paddingLeft: 24,fontWeight:400  }}>
      Faithfulness, it can be found as a welcome guest in many households across
      a dog is a type of animal. Knowne guest in many households across
      is a type of domesticated animal. type of domesticated for its loyalty and
      faithfulness, it can be found as a welcome guest in many type of domesticated animal. households across
      the world.
    </p>
  );
  const text2 = (
    <p style={{ paddingLeft: 24,fontWeight:400  }}>
      Is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      A dog is a type of domesticated animal. type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
    </p>
  );
  const text3 = (
    <p style={{ paddingLeft: 24,fontWeight:400 }}>
      Type of domesticated animal. type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
    </p>
  );
  const text4 = (
    <p style={{ paddingLeft: 24,fontWeight:400  }}>
      Of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
    </p>
  );
  const text5 = (
    <p style={{ paddingLeft: 24,fontWeight:400  }}>
      A type of domesticated animal. Known for its loyalty and
      A dog is a type of  domesticated animal. for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
    </p>
  );
  const text6 = (
    <p style={{ paddingLeft: 24,fontWeight:400  }}>
      Domesticated animal. Known for its loyalty and
      type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
    </p>
  );
  const text7 = (
    <p style={{ paddingLeft: 24,fontWeight:400  }}>
      A dog is a type of can be found as a welcome domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many households across
      the world.
    </p>
  );
  return (
    <div>
      <Header5 />
      <div className="container">
        <div className="faq">
        <Collapse accordion bordered={false} defaultActiveKey={["1"]}>
          <Panel style={{fontWeight:"600"}} header="Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ?" key="1">
            {text1}
          </Panel>
          <Panel style={{fontWeight:"600"}} header="It is a long established fact that a reader will be distracted by the readable content ?" key="2">
            {text2}
          </Panel>
          <Panel style={{fontWeight:"600"}} header="Contrary to popular belief, Lorem Ipsum is not simply random text ?" key="3">
            {text3}
          </Panel>
          <Panel style={{fontWeight:"600"}} header="There are many variations of passages of Lorem Ipsum available ?" key="4">
            {text4}
          </Panel>
          <Panel style={{fontWeight:"600"}} header="He standard chunk of Lorem Ipsum used since the 1500s is reproduced below ?" key="5">
            {text5}
          </Panel>
          <Panel style={{fontWeight:"600"}} header="Sections 1.10.32 and 1.10.33 from de Finibus ?" key="6">
            {text6}
          </Panel>
          <Panel style={{fontWeight:"600"}} header="The generated Lorem Ipsum is therefore always free from ?" key="7">
            {text7}
          </Panel>
        </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Faq;
