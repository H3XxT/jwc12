import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-around;
  margin-top: 100px;

  .text {
    width: fit-content;
    height: fit-content;
  }

  .subtitle {
    margin-top: 20px;
    width: 900px;
  }

  h1 {
    font-size: 40px;
    font-weight: 100;
  }

  p {
    font-size: 20px;
  }

  .pic {
    > img {
      width: 300px;
      height: 400px;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
    }
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <div className="text">
        <h1>ประวัติหมอหมึก</h1>
        <div className="subtitle">
          <p>
            หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวงด้วยลูกแก้วพยากรณ์ ไพ่ทาโร่ และการดูลายมือ
          </p>
          <p>ด้วยความสามารถที่หลากหลาย</p>
          <p>
            ทำให้หมอหมึกสามารถเลือกวิธีการทำนายที่เหมาะกับแต่ละบุคคลเพื่อให้ได้ผลลัพธ์ที่แม่นยำที่สุด
          </p>
        </div>
        <p></p>
      </div>
      <div className="pic">
        <img src="https://i.pinimg.com/736x/65/06/6a/65066af2882f32a8aff8fccad40453fb.jpg" />
      </div>
    </AboutContainer>
  );
};

export default About;
