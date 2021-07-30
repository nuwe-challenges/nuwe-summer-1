import React from "react";
import QRCode from 'qrcode.react'
import { url } from '../../constants'
import "./index.scss";
import { getUser } from "../../redux/reducers/user.reducer";
import { useSelector } from "react-redux";
import getQrUrl from '../../utils/getQrUrl'

const QR = (): JSX.Element => {
    const user = useSelector(getUser);
    const qrUrl = getQrUrl(url, user.userName)
    return (
        <QRCode
            value={qrUrl}
            size={250}
            fgColor='#569b51'
        ></QRCode>
    )
}

export default QR;