import { useState } from "react";
import Modal from "antd/es/modal/Modal";
import Card from "../card/index";

export type ModuleItemPropsType = {
    id: string;
    cardData: {
        title: string;
        emoji: string;
        colorFrom: string;
        colorTo: string;
        sdk: string;
        app_file: string;
        pinned: false
    };
}


const ModuleItem = ({ id, cardData }: ModuleItemPropsType) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [subdomain, setSubdomain] = useState<string>('');

    const onClickItemHandle = () => {
        setOpenModal(true);
        console.log(id)
        const prepared = id.toLowerCase().replaceAll('_', '-');
        setSubdomain(prepared.split('/')[0] + '-' + prepared.split('/')[1])
    };

    return (
        <>
            <Modal open={openModal} onCancel={() => setOpenModal(false)} width={1240} style={{height:"700px"}} className="h-[700px]" footer={null} >
                <iframe className="w-[500px] h-[500px] p-[20px]" style={{width:"100%", height:"650px"}} src={`https://${subdomain}.hf.space`} />
            </Modal>
            <Card className="p-[20px] cursor-pointer dark:bg-[rgb(18,18,18)] rounded-3xl">
                <div onClick={() => onClickItemHandle()} style={{width:"200px", height:"100px"}}>
                    <p className="text-[#0e0e0e] text-[18px] dark:text-white text-center break-words w-[260px] h-[36px] mt-[40px]">
                        {
                            cardData?.title
                        }
                    </p>
                    <div className="mt-[20px]">
                        <p className='text-[50px] text-center'>{cardData?.emoji}</p>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default ModuleItem;