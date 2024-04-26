import { memo } from "react"
import { BiPencil } from "react-icons/bi";
const InfluencerMain = () => {
    return (
        <div className="Main">
            <div className="main_up">
                <div className="main_title">Set up free for message*</div>
                <div className="main_title">Reply time*</div>
            </div>
            <div className="main_select">
                <div className="SetUp_select">
                    <div>
                        <select>
                            <option>20</option>
                            <option>30</option>
                            <option>40</option>
                            <option>50</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>USD</option>
                            <option>RUB</option>
                            <option>AMD</option>
                            <option>EUR</option>
                        </select>
                    </div>
                </div>
                <div className="Reply_select">
                    <div>
                        <select>
                            <option>1 day</option>
                        </select>
                    </div>
                    <div className="main_to">
                        To
                    </div>
                    <div>
                        <select>
                            <option>7 day</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="main_down">
                <div>
                    <div className="down_divs">
                        <div className="main_title_down">Charity Organization</div>
                        <div className="icons_center"><p className="down_p">www.globalgiving.org</p> <BiPencil className="down_icon" /></div>
                    </div>
                    <div className="down_divs">
                        <div className="main_title_down">Phone Number*</div>
                        <div className="icons_center"><p className="down_p">+374 91 123 456</p> <BiPencil className="down_icon" /></div>
                    </div>
                    <div className="down_divs">
                        <div className="main_title_down">Region*</div>
                        <div className="icons_center"><p className="down_p">Yerevan</p> <BiPencil className="down_icon" /></div>
                    </div>
                </div>
                <div className="down_div2">
                    <div className="down_divs">
                        <div className="main_title_down">Socila network</div>
                        <div className="icons_center"><p className="down_p">instagram</p></div>
                    </div>
                    <div className="down_divs">
                        <div className="main_title_down">Nickname</div>
                        <div className="icons_center"><p className="down_p">@Valodik</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(InfluencerMain)