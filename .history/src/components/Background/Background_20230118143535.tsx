import React from "react";

const Background = () => {
  return (
    <section>
      <img
        src="https://free4kwallpapers.com/uploads/originals/2020/01/07/animated-colorful-landscape-wallpaper.jpg"
        alt="background"
      />
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABXFBMVEX////r6+vp6ekzMzNWORf/1bgpo9pDabUPDw//2LsxMzTu7++Kdmb/1Le3rqczMjFnPRf5+Pd1XEri4N7Gvrf/3L9SNRVKKxGwpp6WhHZCKhg2MS1IJgBNLxP4z7Lnv6NAKxzctJjW0MyOfnI7LiU2IQ8sFABLKwDAt7CajILX09BBHwCphWtvTDG5k3fRqo+rn5Z5Y1I0GgAxKSMuHA8iAABYPCaScVk1EgCYdFp/bmJ4Vj2EYklkSjfUrpNpSC5rTzhPJgBFGQA1JhxTOykkFw5xXVBSNR47EgBHKBE8GwCglIzCnYN+XUVjTT82DABgPSE+PjQnQUonjLYwaH01U10pmss7W2Yye5k2boQ/TU8qfqJYRTAqkb1QS0FCNkE8O1c6RG5BMDA+Vo9CPk+okneTe2C8p401WZ41UIrLtptCRWHm1Laii3NSQEBMIgA4KTQyGhomAAAbFA+EKII0AAATxUlEQVR4nO2di3faRtbAJTm4AWERPQDxkkDCsYQFSLYDRgJDagdigyltkzRt022zTeJutt3uV///53wzeoAkSGqXR6Ws78lJCCNm9OPeuY+RNCCoRzDEK1joW1HkjjDsrXeEwTjLO8I7wiCcxx3hHeEd4d9/HneEd4QfI8S84j/6k2sN6GktheQ/OhCmtcrWO8Lwt94Rhr/1jjD8rZsjRJf4bEgIzXCM4vinSYhXGHUoi7KsEgwNIT8tQlKQ+51Bfg9KvnDWlxnA+OkQkhV572l+795M9vJPO2rlUyEkBXGQT93zy15+zJB/F+FKc3xabCzgMxkHIrZMzzdvXWdRU5E/zy/EM2V/T8LQtYzra0WXMICPtxL9D+jPUWODxdYx7qZWMUi2sPcxPiCpgYqHlxDTnhb+BBAgPiVAChBSQlpP/znhvVRDVEEGEEpCVLsBIEDc22v02XUmAOsiJHsf8aI+2XtKMaEjJOX9m9GlTFve60hhI2RvZKIuxAZ6w54DQih9PBB6pZAGB+f1dSVxayFEG/ORMPVhrRbS4K8BEybCRZOwMCNMpX0ahoh7Mrn0uBsjlNKLFJVydJkuzJkwwE91sGXH3Rghqi3I1lJp5995Pkure8K6CFdeW0iLIqFtpAW/gc6a89KS496wdemuUayxAKKQdnO6jHam4ryMrwnJf/SS5oEzF4ut0At47nc2qXwGX2bcD7eunFDen9OhAzj1QIWCX9GpdF4MCSHd3/e7UnvyzYJEultq7s0RyiEhrHTG3tiecryLU02l8u1SVPG7o/S+GhJCmmE9J5+ywRzQ1H6+xkWjdX+Kk94nQkKI4oSLsJC2uQrp80Iqlc8XDIVLRiIRru1TYroghIaQmZ57qtAAgKlCPj8oTNKFSbet1IH+dgBhtORLztOdynLjbpBQSDkJ2n5zcnyxX+i2RnypdFLieS4ShXTRJJCaF3Ffp8NCCHyNdeqpQY0bjU54LpqM2hKBfBxfV1ot5aTmWSzOD5cdd3OEtL5nucxRBCjLwppKkhs1q5ctRWkZzfplfupvUgMJX3LczRGiw7wJWEtaMmPciUZG3aoCjBUIX9rhRl0ndqbGlaXH3RghXhnvQRPla02jWjXAJIw4jHWjW48k7f+Bf5K8lQClUvvujCbohCgqFQr5Wt1oKqP6aKS0q0ppx0TiuzBUgGkZ4TgIuhPhzAy8MDCqfWZjhMuXLaiQ/yLPcTxnWSnHN9umXUY4HuKVlLZhGG3lZAcYcLcANVjiOKUjoEuO+6HaYgVI/lZ6SPRrySjwmW3jslXjbbPcAXGCq1XHMssIDCH3uzU+CQM/mLGgRYmv66zQJQzgw61ClR8Z+lBiJFbstRzGKN/Wp4u/qKBf8jA/zY9gOClNyBv1fNvWta3qdyc9ATdfkbTYrSctMzUyUwxRQki12gJWWqjXlVGS69JhIqS1C2ftDBdIhGmUgBajybbsHCD0MlCXBLxAVZgYra6yUxVu0nNACMnM77qlQASNxwEKYfAc8D0dR00EpVovGmlQfewrkVKPr1Zu0HNQCCvVB/YCb4UydUU2ur1er2svbJPDDgNMFBLF9+/lm/VqjevWq2GyUqlquw21QYB5CEmUUokf9c13KxogpSkdswgHJ8kTgzOU7vLjbpQQGikqUwL4C4YBHfjLJNeBU43pqSSYhyo8giyk820uWjK4Uk0LE6FgTBhooTronopDHXbrIIVJtqCZqtCAJcI8cJgvHNdBpFC4SEsNEyFGtfooCiwUvGLhG+rEDIlcS3NPNlo0lONmEmTk0WSdwm7Sc1AIyWGzKdIQhoTuhCQGTt6m9NSK7W5ogmpx7S5E34lyBruCcTdHiNDjWmvsxDda7E2UaXnR7uiiyqqy3jHqXARaL6yK2/FQXT8EUunW69VGnCUImZootS7n1IjA38ASv6XUOZCr8fUkyFZBVaWvaNzNESJSrw6KJYgy4qOKknTV+eaqBiyMQfUEiUvAdOmb93xrwjXUFqYwXcXgAQIoGyItD6FbQLFhTOJCGJ97QnFhPLFrimh9UlrItwMioc7ga0byH70y88Bpqu5UhrVJjVsEyBtDctXjbo4QRYZt2zij0ZM6Z73wAHLG9Op9GAkxhO6UotbqBZc010y5UZWPujWYWcu4myNEVJBzmqmMUauX+JNR26i5NXjpuv8ipIRktwYJd7h6s9rtdo0a7/aibRFf07ibI0QqnVHSDoE7XCSZ9ACO1zfu5ggRqWFNxR2/F+Xa+cxSPQeFECEe1OejPQRstz4RQoTpKFzURxg9qTajirxkz0EhRCp6+yTiZgRBowuoFX3ZnoNCiODDSYufeplostSe1MEL5WJILtlzUAhBw7DTHnHm5Sa+3pyYl/K5lhrX6WV7DgohqILl/KVSqyktw1B407VyTYmUKXrpnm9PuKYcX5TZVLvdVE7sq4lRviogpNqpLN3zxsqlD7eCr5XWdRIzeHhFeBrwzZSNbVTwdY3rtKJLGMCNWnGUGVIZDMG10tSjRvmmaF6DkvdE+EDJOsZ1ZM2EOODTGwWoL7rrEEaT9aq1wC90mHhfCOczM2YrjlaIHqWiIlwEjis2X4Rv2c9XCA0BFCAdFfQTSkLAN6R0CQX2CUAQrWaujEZ5pSpaLpTWzHVuhpLpcBIyYiNuXiXFzKDAGlw0muRqE02w14Qpuz7EtL4QPkISmKdsRzvaXLEnxVa0pDR0BwbTZgUwOyG8fYeAUKKYaX1b0UwjlCZNShQcKloXXUmboGueR0pCQNiTEMnRVkWDsGrny8KMAu1lcPfxJNEI0xVSoBMKR+KE8x8dR7D4V19vP+s7FEKD9fWFSP21JOLrImRFEB4I0npL0Egs/vzF9vb2M82iIKg5QATvuJQYfEIZxIE4K1scwEo1E3D7xVdD8H9SbTC+nhig757LoQafMA5CutihnGig5Z9tW/IlAYA13NsPrY0BssjepOegEOoSvAvB1hQpdoYO4fOG2hv6AElNhs5WEtexfLqma090A1RF8b5DQtPS1rPnz795+eJlR78nkL5uhlaSSlOugnhtFc9qyiVah6tMcde9B/LWs5cvv/2uOKARPx/wq1bORooqvtS4H0DyH70C88BZDTZNowU4+Vffmzb6LI7My9BZVpSodWyxsA5CzCodXITMV6Yr3f5+jMwJSjk+lO44z1wEnVAWES8hGX9p+Zkfyv4iAkbLqeMZiqHQIS7Y+deMUHj1wnalX/mLCJDNzRLwqRKDTYjJ9mSbEarPbcDtb1TELy5jRjQ1BDrEhR7tO3Ws/7VD+H18zpX2XPmNQFVCQCg6VjclZL5zjHT7h57/Q2THdV8prrMr38xl5YR0w5lqU8L4t9tTeeWfiJ6EG5F6gSfEh9OQ5xBi5R9mhM/9RQU9drtXUmNXvbi4akK6P51WDiHxfAa4/VL0TUT1zHM/FEOtekOeFRPiTGNKYBNOg6EpX/e9EZHpaV6t9thg6xCTZ1d2bcLKNBiaFeI/PCrDKKbivbPUVGKACWnXgpJNyPxj20Po2U+Q0EnSHRDhphPMmgmXqi3QiqsCss9c+m77wzrUJGio7ndIeYgHr1yatTKunXQWEnrnIQ2f/qX7ni0xiPiKzwpdwgDmW1l5jlB45SZ8lnH7UknHzGLL/Z5FuLKzWvUqRsaVd9qEKPW1i/BLzxqUbG6kgHXcaQCbCTShRUWiNKNmGgvi4TNPXkpq5tO/OOXGDjqhhGACkaHOfvzp9T9tQrQ8S7y94R0dC2iYCGEhG9cyvbMfX//8y2efffbGiQKak5e++NITGICjocNESDNsvPHPN68hnClvnGRlWlt8J3s/L3TQEBFiw969JjXFcxOifWsd6iXl60CwKomwEMpv3129XUiIDL8xQ2HRXzmFixAd/nb19u2/XIT/nhKaqemL7+auxoSLEGeb799deQiHznFmefGNv24KHSFx+Wvz6rWbsDHNxqSvtr/v+J+LgYRYmAiZ3q+XVz+5CR8/da7BkK++zc2vI4Kce16HVqkRSEKh82v76o2bcO/BY+e+hMyxL1CYMHJmntCqTlZJuKosHq2Mf3139aOX8MHjhmrWEoI4v9iNMPZOEbg4nL2pDW837m1bl/gw2X//29v//OIlfPDg87xY8V0vtA7HhYmjOron07jph3C5T6MrRvIf/dfNQ7y6ejd2E+ZTEPHB45SuCrTbkeK0QMj9/Vn0GHYoTWYJQtWeSgFea5Pfvm+Pf54Rvj7P5h9YjI8HY00cshIQQpXF/njw+PHjpzPfw2ZwgRXjcZmwNsQKKCHx7r3RcxNmt8rZwgNHHv/+uSm/P35svfH5rLRnnfWrSgcLMKFw+euljzCWKGfTM0i3pAoXs2p5SshQQV7zRrvvqd5rDyGQRK58ni6kfHTp82L5dLamQziEw3iQCZHe+3eTOcKtWAxo8ryYPT8/T6fT5+fZbLGcS4B3Y2fTiahSFRrFQX3yOxNoQu3qt70Z4c9vilu2xHLZrVw2Z0kiAaDNd7O2MyXVXtMwKE0z2tVgE8pv317828b78b9nxoywXISQUG+xranEDi0zxcRqieN4uCsf1yQCTcg0r56ahK8be616VykmPDrc8ktiANe/K70WfHjW2pSvpQaasEJdWTo8G40uOWUyJQR4CfBnDnEXelO55XomShkGmpDWr/ZMwkYp2j0Z7c8IE2ASLiA8pMCnMkokGXWeT1TEQBOibLtrlk9nJ8n2yE0YK5YB5LyZHoCqWG1FR/CxdvCHi44CHQ8RtEJNoA5/afDJy5HbSmPlLCCMzSEejjFEavKTk0hkh4/yrWhpQq+dcJmyBZW/ePP6p//+XzvKpZRufka4lSiWi+U5wK3DPg4Ki2oropT4S6404TiDwINTLi1oJbV+hhWIbrur66zkmnmxBAj08xMxdsagKJvmou0a1+X5Lp+s6Ss/K3QJA5hvxc1SUGAZkkSEMzdSLrtgIsayKopXOlyypXC9Etfjo/ZmSkFcxVgQPNyECRATy3MTMXYq0ijdryVrrehlPWqU6vfQMBGOPUpLFOdj/lYO1IO40DG6Rslo8Ua3wyw/7gYJ+4cepRX3571pIgtqerwiETIl6j2RoVcw7uYIaR9huVH0A25tHZnXSHGcxEgcW8993msk1L2Ep/HOnK+JHXbC+qtkkFA8dRPGTuPD3TkdJvZXvjCzOUJM9hIeUpXBfEg8IML7lCyqFj2EuQHp1aqt2ZV/s5sjZLMenlyelLJz3jRn7uQdUkLCy5O4wLDxXMAAiVton3TGmTMv4bGAqHO+JlYcrnjcDepQeOV1LA8ZhL7w+5rYIfxVhHUSrrS28BJWxh6c2AGBINTh3ER8VUHDuOcebCU1D04M5C84MbeYkTiQ1ovkP3qFRkt6kxpgjxheGR/6fc3pai9rb5IQyXjDHwgMOCYXfYQgcQsvoXrkZQGBATjYOTPdR0NLSBx4CbMgQ/NXHEBAFAkrIXPsJYShDx8e+ADNheGQEtLH3nAB1yxQOu+roczrFyElxL0wscM+IMS1U/9EHNNhJUQG3jQUrsqgOHvg8zXwQmJYCX0ZTGIAn6AEIdFHmGXXmDyul1D0GqS57oRi/ioxdiqTYSX0lxK78Mk03FdVgfmpeX4LKUyEzLl3ylkra3MhMTGg8Vv2HBRC/8LMqW6SZI58hLvMBglXmuNjvvXDQwpeWcKlY583PfL8kOyKa4v1lS3m9hG+6qJjNTW8Zjp9fy1nhS5hAH/a6nObsVzDasqcenWYy+O37PnGrevec0/1LbcVrIV7vweCSzjhJMSls9giXaG+VCC2q96y58AQCt6lmsSFvVGLdzkcTEQxpIT+0Je4sC+f+ZeGc74HoMNDiMue0Jc4drbh8+p2y3UXX9gIJU8hMSX0LVKB5Fu6Zc9BIfTVu4lj50ludddLWFRv23NQCEn9dCHhfPlP3rLnoBDS+u5CQqSQ82Y7ffyWPQeEkBbPizl4y2zMT6h540XC+/xsaAhxun9azFr3PXs8zYLSMVS/uzZrxcA0TORyZYBZBmbpImR8FzC8yfcqCddZW2D2CncM3rEPGGNOToPAJytMJxuDbdCOrQs0Kxr3I60r7pqEAd++bz2WyxZzFypm/+wvGYcRMQG1m7XseF+m0Rv3fAsk/9ErNVpS3C2Xy7mcSRnbKmbLr5xN55AhcDVlc4YmLDs+zRJh2XPPmQAInTnbBZKFk3DL1FhuSoGwxVg5mwPmW4QCv4gjMUyEOI4J8YtH9y25PtqFkECVZ8xUh7vFIpid57tHT4AcgS8iHR4d4igtSOL5k/sueQIYE7FTnXY0DAjL2V3XMU/OpZAQ4qgk9s+yD+/75Hq3mDuYqgkhzotZz3dw/wmFLTPuxggxovPHIz+dJUfZC3m6uyWuHfjbHzkaDjQhzvo049HSsTolpMfz7c4sDTZh5/qDgPfv/yHMrHROhfevB1IICNGCj/D64cHuVL6YEpKi/5u4ProIxe6eHh1eXz8678uD44e2HHemPZDiwdGT2aHXIF4c/SFif/2b3Ryh1Pjij0em/HFcoIYCigjDuK7rGhB5qkIUUY9hDNzdPQICXxxdP2rQf33czRGiINRLrKqqLCN4DsBNmX0WzxxcX1+DWA/kCXx1lqFDEg9Ri8W/zcDcZ0kChM2Dh1DbDw/O+jKD/WnPKyFcW9myoJXEaYEhWJaQBIHGcPQ2n71x62aRvK0ufc/9zswKx0WXMIAwtK59re1vb70jDMZZ3hHeEQbhPO4I7wjvCP/+87gjvCP8nyb8f9HW8KW4oPCzAAAAAElFTkSuQmCC"
        alt="person"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AoADTWW5BmGepQuIEVF8iGLViaFlCmk05w&usqp=CAU"
        alt="tree"
      />
    </section>
  );
};

export default Background;
