import { StyleSheet } from "react-native";

const cs = StyleSheet.create({
    modal: {
        position: "absolute", height: "100%", top: 0, width: "100%"
    },
    // POSITIONS
    pRel: {
        position: "relative"
    },
    pAbs: {
        position: "absolute"
    },
    // FLEXBOX
    dF: {
        display: "flex",
    },
    fRowBetw: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    flexOne: {
        flex: 1
    },
    fColumn: {
        display: "flex",
        flexDirection: "column"
    },
    fRow: {
        display: "flex",
        flexDirection: "row"
    },
    fCenterCol: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center"
    },
    fCenterRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    fColumnBetw: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
    },
    fAlEnd: {
        alignItems: "flex-end"
    },
    fAlCenter: {
        alignItems: "center"
    },
    jcCenter: {
        justifyContent: "center"
    },
    jcEnd: {
        justifyContent: "flex-end"
    },
    // FLEXBOX SPACES
    spaceXXL: {
        gap: 40
    },
    spaceXL: {
        gap: 32
    },
    spaceL: {
        gap: 24
    },
    spaceM: {
        gap: 16
    },
    spaceS: {
        gap: 8
    },
    spaceXS: {
        gap: 4
    },
    // TEXT ALIGNS 
    txtCenter: {
        textAlign: "center"
    },
    txtEnd: {
        textAlign: "right"
    },
    // TEXT
    blueLink: {
        color: "#0BA0B5",
        textDecorationLine: "underline"
    },
    textRed: {
        color: "#F40F0F"
    },
    modalCloseText: {
        paddingVertical: 6,
        paddingRight: 10
    },
    countText: {
        textAlign: "center",
        color: "#FFCF00",
        fontWeight: "600"
    },
    text: {
        fontSize: 14,
        fontFamily: "RalewayRegular"
    },
    inputText: {
        fontSize: 16,
        fontFamily: "RalewayMedium"
    },
    title: {
        fontSize: 48,
        fontFamily: "ProximaNovaRegular",
    },
    // INPUTS
    focusedInput: {
        borderColor: "#0BA0B5"
    },
    inputField: {
        paddingVertical: 16,
        paddingHorizontal: 22,
        borderStyle: "solid",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#E2E2E9"
    },
    // BORDERS
    errBorderColor: {
        borderColor: "#F40F0F",
        borderWidth: 1
    },
    bottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: "#F3F3F3",
    },
    filledBorderColor: {
        borderColor: "#454545",
        borderWidth: 1
    },
    // BUTTONS
    mainBtn: {
        height: 60,
        paddingHorizontal: 28,
        borderRadius: 18,
        textAlign: "center",
    },
    // BACKGROUNDS
    bgRed: {
        backgroundColor: "#F40F0F"
    },
    fwBold: {
        fontFamily: "MontserratBold",
    },
    bgDisabled: {
        backgroundColor: "#F0F0F0"
    },
    // FONT SIZES
    fzXXS: {
        fontSize: 10
    },
    fzXS: {
        fontSize: 12
    },
    fzS: {
        fontSize: 14
    },
    fzM: {
        fontSize: 16
    },
    fzXL: {
        fontSize: 20
    },
    // FONT FAMILIES
    fReg: {
        fontFamily: "RalewayRegular"
    },
    fMed: {
        fontFamily: "RalewayMedium"
    },
    fSemi: {
        fontFamily: "RalewaySemiBold"
    },
    fBold: {
        fontFamily: "RalewayBold"
    },
    // TEXT COLORS
    colorWhite: {
        color: "#fff"
    },
    colorBlack: {
        color: "black"
    },
    colorDark: {
        color: "#4D4D4D"
    },
    colorRed: {
        color: "#F40F0F"
    },
    colorGray: {
        color: "#A9A9A9"
    },
    //FIGURES
    circle: {
        borderRadius: 1000
    },
})
export {
    cs
}