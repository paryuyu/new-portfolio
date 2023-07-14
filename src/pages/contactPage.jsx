
import { useState } from 'react';
import { FiGithub, FiMail, FiPhone } from 'react-icons/fi';

const ContactPage = () => {
  const [isModal, setModal] = useState(false);
  const [contactContent, setContactContent] = useState({
    title: "",
    content: "",
    desc: ""
  });


  const handleMail = () => {
    setModal(true);
    let obj = new Object();
    obj.title = "Mail";
    obj.content = "메일주소 | u_00y@naver.com";
    obj.desc = "저의 포트폴리오를 보시고 관심있으시면 메일로 연락주세요. 24시간 내에 확인하여 답장드리겠습니다."
    setContactContent(obj)
  }

  const handleGithub = () => {
    setModal(true);
    let obj = new Object();
    obj.title = "Github";
    obj.content = "깃허브 주소 | https://github.com/paryuyu";
    obj.desc = "저의 코드와 개인적으로 진행했던 지난 프로젝트가 궁금하시다면 저의 깃허브 홈페이지에 방문해주세요!"
    setContactContent(obj)
  }

  const handleCallModal = () => {
    setModal(true);
    let obj = new Object();
    obj.title = "Cell Phone Number";
    obj.content = "휴대전화 번호 | +82-10-9653-9311";
    obj.desc = "즉각적인 연락이 필요하신 경우 메일보다는 해당 번호로 전화 혹은 문자로 연락주세요. 피싱으로 착각할 수 있으니 연락이 되지 않으면 꼭 메일로 연락을 남겨주세요!"
    setContactContent(obj)

  }

  const handleMove = (type) => {
    if (type === "mail") {
      window.open("mailto:u_00y@naver.com")
      setModal(false)
    } else if (type === "github") {
      window.open("https://github.com/paryuyu")
      setModal(false)
    }
  }

  return <section id="contact-section" className="contact_section">
    <FiMail className='contact-icon' onClick={handleMail} />
    <FiGithub className='contact-icon' onClick={handleGithub} />
    <FiPhone className='contact-icon' onClick={handleCallModal} />
    {isModal &&
      <>
        <div className='backdrop' onClick={() => { setModal(false) }} />
        <div className='contact_modal'>
          <h2>{contactContent?.title}</h2>
          <p
            onClick={
              () => handleMove(
                contactContent?.title === "Mail" ? "mail" :
                  contactContent?.title === "Github" ? "github" :
                    "cellphone")
            }
            className={
              contactContent?.title === "Mail" ? "mail" :
                contactContent?.title === "Github" ? "github" :
                  "cellphone"
            }>{contactContent?.content}</p>
          <small>{contactContent?.desc}</small>
          <button onClick={() => { setModal(false) }}>닫기</button>
        </div>
      </>}
  </section>;
};

export default ContactPage;
