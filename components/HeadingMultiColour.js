export default function HeadingMultiColour({textLeft, textRight, customStyle}) {
	return(
		<div className={`font-['Open_Sans'] font-semibold ${customStyle}`}>
			<span className="text-[#E6A424]">{`${textLeft}`}</span>
			<span className="text-[#1E62AF]">{textRight}</span>
		</div>
	)
}