export default function HeadingMultiColour({textLeft, textRight, customStyle, colorRight = "#1E62AF"}) {
	return(
		<div className={`font-['Open_Sans'] font-semibold ${customStyle}`}>
			<span className="text-[#E6A424]">{`${textLeft}`}</span>
			<span className={`text-[${colorRight}]`}>{textRight}</span>
		</div>
	)
}