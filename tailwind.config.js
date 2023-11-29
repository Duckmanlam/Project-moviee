export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        Error: "#EB3F5E",
        Grayscale70: "#78828A",
        LineDark: "#29282F",
        warning: "#FFCD1A",
        Grayscale100: "#171725",
        mainDark: "#0D0C0F",
        dark: "#333333",
        darkText: "#ffffff",
        Grayscale60: "#9CA4AB",
        Grayscale10: "#F9F9F9",

        Primary: "#B43FEB",
        Line: "#E9EBED",
        DarkSmooth: "#1A161F",
        Label: "#B43FEB",
        Grayscale40: "D1D8DD",
        alert: "#FFCD1A",
      },
      fontSize: {
        32: "32px",
        48: "48px",
        24: "24px",
        56: "56px",
        20: "20px",
        18: "18px",
        16: "16px",
        14: "14px",
        12: "12px",
      },
      backgroundImage: {
        heroBaner:
          "url('https://lh3.googleusercontent.com/fife/AKsag4NkDEim-7b8zEUMwX6QPIAWvzMfg_ATSFinTQtpEjcrXioJa7sZAj2NVqakJCF9jPsgPoVYEcawRMJU_pYQCn5wVZ2-wPsKEKB26pJ2gahXoXjPznQZeMPUrhGt-KxUWwXPAr_3Ypwntr4QDsEo-6t4aaL5Vv0vVGx36CeU7b5HJH5c8HUN-lBGria54mefcIL5fGCTahYrNHJKyQp3B6_DFlHb4zsYH6C1BqV2yLpUK8QV5617ZOf3-ng-jLjZDCqhcHPHckpsjGCYE3p83FzohnO6vHgRgUoz4muCMunrH649Lpwxps5OqEasU-Tivm0Sexd3_Lv-CcRNh43wXoFSy4MCoRG6oVj5RwLZa8rPK_TDm7gQmNYl7m5j6qBxLVvDAHK85dYpXF9R8kGb2pD4oHOEGUFLbH5zQmLNFcjCyjH0Uq2cv0c9kncfbW9ONyRJ7JfTadu4uvT8de9xgE2kYTjR17NYSe3492SiEVtGLQQJZnnfRxYlT7HLmYGti1iJleNQuP32M1VCHriHuNOW_h8IEVGZj-MB6w3fbOueeE_FT_g6pNglC-UUQcmVkQehf8j3_MRG0ie5w3dSO5qv4lDmFvps_PpCj5TkGYK3RGsJOwUyGuaP9zF9cb-EGT_feOdI9uuBdfvxqA_OrVKjYVKZFq6VY4Vowy_cwXYYICtivfk9XWMtR2plOYB3xCQB2goGjW6_yavZBBUPl1nqxlhTlWv4D_lR46qsfn6JXdv-pWzMCo-0hidEgWOeyMlqdfNArXyq9_8FfTB3pAQ3Q3t2JeB2MOfgJrC-wxUWxwR-aAzRHcibEw2n4wDBD2CDiEpM3zfsNC5rU32MtPfqk-qbVoBLjslaN_l5Onxu2532y0xT6GTAOiYxIT8ZBIPr9X4UueH0LJElSeuN2rBwPp5A5EIXculzsUn8bjKNcGrlTl1tAYI8zSW5swQtH6XMmXQcClYdvEZbXwet3TDrtU6WTZ9UbBBLemya3GmpB8kY3s9uhPy819scHGgfb4LzDcqYOLCovSF0qMw9srjJS9coeVFWalRqmbmWNsE0zfX2l9GORMztfEarH7tA44X4rfB72EWZITllOC96D8IcxCmri7voRypuyUdsys379kw1Iv3AzKce2B69ycwPIALaG_iQdZa07b9EK2ABn_IvRsQt3C0tLSe-jBeBIvceespGxCVfdvlc8reaPTnRZ2NKEUl6he_Bb1_3yBMIFjOYdxR1wM5tDdh60XyDPWHWzD1ITBBfzXmo5FXso5DoeLk5RYPkaAKOy0aTMqSkWwicctjpKsnOKZWcpsEg1mt2Y6Fu6AURnXBWPeoUz3yJXNo-C5KGBsfXcrU40PNw4kIIPv12aOYGzA1oB8X_HeNWlnmoKaqgcGXpL-NsJRvXelW711VQYepxcU6HXqQptHxTW-jzhaqMP2GuuVaQzROSme9gr3mdW8P5ntoqq-uFeD7MHqmGJCZ8iBxU60hveBjpaC5NoVp1X88g9vctmhz8eL42KkJHSEOQZkWL7VZ0N19UmwX3bIg0JLXKB4Hf2FSlqVhjdGGnLE7XClMOZIxmRopZyMV4GGej4jPSWDc6cJz89yxWn162xDY=w1920-h933')",
        bgImage:
          "url('https://lh3.googleusercontent.com/fife/AK0iWDxM5eddYG360n9HBZEuRZcPoe17-sbKM6iJlyVnGEoPSeMToblaHxK0I-2eALKItLc99nXvYxcCBymgM7rzUlzI0RAQF9rjvkISiwX-3y_6GW2RYFdvY_uASFJmG4fOSppBJGKgWlaxWkpe46fSNK74HyJ2yvPFsevRlgPRhtTD4HGBeZijdG78ZMuXLcR1GU51F9DMLrjEH1YXn-VgdLMjwVNADLmO1RDPGgj80TyrLf_sJRVYpz7dh8iCjaL5lEVS-ciTI9GnCvb0ieIB-ZB8qKR_6IdmH-aabpzhTtAUFIXKfz-__lMUKy9Ujc8BmjzDxOzIOLmHbzGJX9GN6z2QhY843D3QBZz16Dx19bjnvM7OnlmGdAvYR6Jy7C3R2owWwb-IVu4mtg3GoQb9c6aIARMHUzz9JTDZoKnOLm72_NCDdldfeWfSyhlFC7KaG0GDWAlPofh57nMeyQ9Fq5scR5Fm6XUklvVEFT_ZTEsCKl9cX9cZGYQCziDp24w_4at9XK1Q9EnfWw87MKK4ha-9994wInam55qfbMlJ4ZoL7ntaYAEIL7WsOGXxW7nnVAvlylnI7AbJLYb9tSFnDLTXI1EkcXhpHmy9fyRsmXkSOHJ6yU4AW69w6zWKhTWXUP2wJMA0PZcbWTa6-26mRZNuq9tX56IS0yRRfs9DBABeOpSJ4Eo0NnNVC8YfgztBMsJFSM-qdPVgPsHDLHOi3cPqy2eS0tThuj66nPVRUKZKvmscLB255wlnqnyYiEnHh9Z7t4L6DOgznMoqmyzLIdcaDZbDRWY3g0NeHRhaJ8j8Znm_xy18bu2C0bnzS76AiNJxcdXiFZrYQKLZb24kK4kq_4hBuwftPA1wF4PtynOSJSeplrUshppgAOW7HDcN5MqQAdrh47jSmUpS1H2wIOcPfanDmeDLaV-8PHnRaCbX5p8nlyt-M95QYeO11XKryZUYz8Fz7SQoGHRgiQ974xdbsCVIOk_51n35zr8vmgLVwWki16gnOZkUzg5uimAkf1YDpSfC4co_cGCZkmPTJ2l-0TLWBldT4YLk4OjH3JP4bnZzBm4zVn_7iwjGAh1Li4R4pm_tKYkmb1tUpliZb6s2124-NnfrHW4iaI9icFtV0x3im7iiKZ1mWKX29-1KnS7spjwgr8hFF8OMWYQRxxHT7roFDQrPf4ZYuUU3-vn9jUmCwXXKNP3y_7fXGw9xnHszCX003jWaZ7ci3PCT-vFP1NeQ5kRBgJT44lmpWsDFayAU-PG8gW3SM5WDsqDuJh5QRnKHKP63PJuRZpqhc5FurEhGXvqYn1tZnSHUiu6FXbCzzw0kT-M0KPhrennICRoSGGUbf0aJytgHfeRJXHocvrorPEJgkWHyVmqlYL6egZfwzpWsU83aYw37sbY5JdNRdQIG3rncULJV3XByH4NNk5eKwxoer9gItgN3yTS4j_Piadvf604kHb7oMfcEi8gkn6GeAFW8j5DoCkTVEtspkPQv3uanbemi1BnKTJbQ3HwSlxXzsVU9EqGtRtnDMQRnzvJFtfEWChNexbFy-lawSJZngHMgKYmEuiwOD8FxeM1o90mqnAerx-iqekPx0JKAWOpffkCuf_hEYw-8-0P-qrLNXApEIEUG72qBqlg8LvxYJXjyRG6BdS4vY9-b3KGcQe5VwbjC1B9eB2OV3Wu5bgI=w1920-h963')",
      },
    },
  },

  plugins: [],
};
