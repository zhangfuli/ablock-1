import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import '../../../node_modules/react-id-swiper/lib/styles/css/swiper.css'
import './sliderContent.scss'




export default class SliderPicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: this.props.dataSource
        }
    }

    render() {
        const params = {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            spaceBetween: 30
        };
        return (
            <div>
                <Swiper {...params}>
                    {this.state.dataSource.map((item, index)=>{
                        return(
                            <div className="slider-content" key={index}>
                                <img src={item.src} alt="" width="100%" />
                                <div className="course-img-title" >
                                    333
                                    {item.title}
                                </div>
                            </div>
                        )
                    })}
                </Swiper>
            </div>
        );
    }
}