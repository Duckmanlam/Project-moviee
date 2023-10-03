import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const images = [
  'https://lh3.googleusercontent.com/fife/AKsag4PkTs7EzabNQV70ivok3HN2dcSmyMk0E5JjadD4h0DVJlTiJ2EPAtrv4j1_kyVAtkKeOw2WVz73fBW4RjmTKpKsBHiaAMmFpO8TEnuUDG0hrdfcrn0go3NElTDfAYcBEqQ1DZsDDIEMPuITeGjvb38FwXMNgICfZ2CPR4CrVLzqvuQ8z1CDLG8CG1aJaYcKUTk6OwFIYPY-zZSRRRi-kx-GOeMgQc--0DTERv17-H-LpacBPExrTNk-yV-ULYeH6tSgaB7WYfw2KPM4i5_o6tp3Nc6s_hOOwC0ToNo4YvTsY4irfZ2U1C092LOfTH_eeXzDubXwZ-DGnzbBGWJ3jFny_zFVWZ_pM5sU2HammlYJcKp_2yu9Hhid5Dv4AAuTHQ811T_pjBNL0aVRta8mBx53Zokqtd_vSU2i4WALETpBTa5d9oTNhbf0OIDD234NGSQ9ZYjvBWZbER8GEIPZP_jkCgIrQfAD7m9sg1E_7H4xS0iO5B7GLaaw90DMEB5TRBQdVxjpmwxLSktIKG3hrReQLWUVEwZywENtTWuNdxOg5nwNBWPvQrznRlj2X6SFoP4FQ4qII4eGyOsr1AhmSeAf2d0TLGZZnnJbxlnjhuNJ3MEx-zGHFELEzphcQ5Kv2EvxJYLQF00deFVzLs9xVcM5cMysMK6WTLSWKtShe8RzUGv2OY9epoL_KKhzeF2S7NpaXxrAYGOsVC3sDfvfe13gAaAjYneDefxERKMOEQbgesYxtE26_fb0ilWdH11bd4flX-o6shhMxrcn9-aeNG0JhdpA2z5JWS739cclmH6fpYMdcsbeibZmY0cYIrbPQ_zjeCn6xOfzujjqinkYeKbR18WMKKxXwAWisRWpgfSkEsBKHNmnICygsSU6GluxHT5QutxdkFiYS3bsrVIkXsiqptFCGBT98OED1phN2eqPOgvJAlg66ouU1D1oINp9z2yRqHiU08aWRrWthAjLrvOsxpLT1vlGw0d36xGaQOidtW-SOmp18J6cEqfcvF0RJz2FRRg20NDhl7AcpMmOF-v3m8PNBkopqNwbB-IzjuzxU2aKZfO1MgUoMLO7Y_A2VpwbWMr4sjfSNYh9q6NaHsl0UDiHEmL-GEmhd34Bgo-dkgkRblSJuMqET8MhGJfmLZ1A9Xljx0GN4GCrIzZCy0p9wFfuQljeMXAnC3XxQfP3StgovhyBqdbv38g6Y7UrJLkwm6S6KpVx79qWPcRtC8As9EVOUvYaVPM44iU-hpl38f_dOEY_8zWA5Y_e-WiT2G7fPxRNTFZ5MX0lEa1QXt2P25OLmr2F3B4aSyc_WPg0aaZf3bHfEVycUsyJNum9e-8ze_W0w-Oi6xTtIhtECHng-cFM9JISZed5pYYCBwe9eMAU0JQUOwQhWLoeL4OMhf9j47tVTtlUTC1OJYnNfbWTbEfLtQ4dYtmhYoULcH6vr69aJz3EPa4Zz0S_pXJpUgwkKBv_yJ7_pK07qWBO9HjpggKXuzws3jeQ6kJeDhHU7j_4y15B4YAd2K-vLNJAJBNpLNGdiceLA-Am69TS-98Wah158N3cxuwyri_e1W3M42r2buCivv6-ZB-BrzlhhxkO1PfMQG50FIo=w1920-h962',
  'https://lh3.google.com/u/0/d/11FFJXZYLfM5VUcqUpvZnSP6HCdqSCXon=w1920-h962-iv1',
  'https://lh3.googleusercontent.com/fife/AKsag4PkTs7EzabNQV70ivok3HN2dcSmyMk0E5JjadD4h0DVJlTiJ2EPAtrv4j1_kyVAtkKeOw2WVz73fBW4RjmTKpKsBHiaAMmFpO8TEnuUDG0hrdfcrn0go3NElTDfAYcBEqQ1DZsDDIEMPuITeGjvb38FwXMNgICfZ2CPR4CrVLzqvuQ8z1CDLG8CG1aJaYcKUTk6OwFIYPY-zZSRRRi-kx-GOeMgQc--0DTERv17-H-LpacBPExrTNk-yV-ULYeH6tSgaB7WYfw2KPM4i5_o6tp3Nc6s_hOOwC0ToNo4YvTsY4irfZ2U1C092LOfTH_eeXzDubXwZ-DGnzbBGWJ3jFny_zFVWZ_pM5sU2HammlYJcKp_2yu9Hhid5Dv4AAuTHQ811T_pjBNL0aVRta8mBx53Zokqtd_vSU2i4WALETpBTa5d9oTNhbf0OIDD234NGSQ9ZYjvBWZbER8GEIPZP_jkCgIrQfAD7m9sg1E_7H4xS0iO5B7GLaaw90DMEB5TRBQdVxjpmwxLSktIKG3hrReQLWUVEwZywENtTWuNdxOg5nwNBWPvQrznRlj2X6SFoP4FQ4qII4eGyOsr1AhmSeAf2d0TLGZZnnJbxlnjhuNJ3MEx-zGHFELEzphcQ5Kv2EvxJYLQF00deFVzLs9xVcM5cMysMK6WTLSWKtShe8RzUGv2OY9epoL_KKhzeF2S7NpaXxrAYGOsVC3sDfvfe13gAaAjYneDefxERKMOEQbgesYxtE26_fb0ilWdH11bd4flX-o6shhMxrcn9-aeNG0JhdpA2z5JWS739cclmH6fpYMdcsbeibZmY0cYIrbPQ_zjeCn6xOfzujjqinkYeKbR18WMKKxXwAWisRWpgfSkEsBKHNmnICygsSU6GluxHT5QutxdkFiYS3bsrVIkXsiqptFCGBT98OED1phN2eqPOgvJAlg66ouU1D1oINp9z2yRqHiU08aWRrWthAjLrvOsxpLT1vlGw0d36xGaQOidtW-SOmp18J6cEqfcvF0RJz2FRRg20NDhl7AcpMmOF-v3m8PNBkopqNwbB-IzjuzxU2aKZfO1MgUoMLO7Y_A2VpwbWMr4sjfSNYh9q6NaHsl0UDiHEmL-GEmhd34Bgo-dkgkRblSJuMqET8MhGJfmLZ1A9Xljx0GN4GCrIzZCy0p9wFfuQljeMXAnC3XxQfP3StgovhyBqdbv38g6Y7UrJLkwm6S6KpVx79qWPcRtC8As9EVOUvYaVPM44iU-hpl38f_dOEY_8zWA5Y_e-WiT2G7fPxRNTFZ5MX0lEa1QXt2P25OLmr2F3B4aSyc_WPg0aaZf3bHfEVycUsyJNum9e-8ze_W0w-Oi6xTtIhtECHng-cFM9JISZed5pYYCBwe9eMAU0JQUOwQhWLoeL4OMhf9j47tVTtlUTC1OJYnNfbWTbEfLtQ4dYtmhYoULcH6vr69aJz3EPa4Zz0S_pXJpUgwkKBv_yJ7_pK07qWBO9HjpggKXuzws3jeQ6kJeDhHU7j_4y15B4YAd2K-vLNJAJBNpLNGdiceLA-Am69TS-98Wah158N3cxuwyri_e1W3M42r2buCivv6-ZB-BrzlhhxkO1PfMQG50FIo=w1920-h962',

  // Add more image filenames here
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full ">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          className="absolute left-0 p-4 text-white  bg-opacity-50"
          onClick={goToPreviousSlide}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-0 p-4 text-white  bg-opacity-50"
          onClick={goToNextSlide}
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
