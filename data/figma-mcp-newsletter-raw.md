===== get_variable_defs  (nodeId 10123:33908, fileKey IYTcuPQax3i4duD9hHruYZ) =====

```
{"var(--primary-foreground)":"#ffffff","text-2xl":"24","font/family/font-sans":"DIN Condensed","font/weight/font-semibold":"600","text-xs":"12","font/family/font-mono":"DM Sans","font/line-height/leading-5":"20","font/weight/font-normal":"400","Body/S/leading-normal/normal":"Font(family: \"font/family/font-mono\", style: Regular, size: text-xs, weight: font/weight/font-normal, lineHeight: font/line-height/leading-5, letterSpacing: 0)","p-1,5":"6","p-6":"24","p-3":"12","var(--muted-foreground)":"#191c19","p-2":"8","calc(var(--radius) - 2px)":"0","border-width/w-100":"1","custom/bg-input-30":"#ffffff","var(--border)":"#7e817e","p-0":"0","var(--primary)":"#0e3a23","font/weight/font-medium":"500","Body/S/leading-normal/medium":"Font(family: \"font/family/font-mono\", style: Medium, size: text-xs, weight: font/weight/font-medium, lineHeight: font/line-height/leading-5, letterSpacing: 0)","p-4":"16","height/h-9":"36","shadow/2xs/layer-1/x":"0","shadow/2xs/layer-1/y":"0","shadow/2xs/layer-1/blur":"0","shadow/2xs/layer-1/spread":"0","shadow/2xs":"#0000001a","shadows/2xs":"Effect(type: DROP_SHADOW, color: shadow/2xs, offset: (shadow/2xs/layer-1/x, shadow/2xs/layer-1/y), radius: shadow/2xs/layer-1/blur, spread: shadow/2xs/layer-1/spread)","var(--radius)":"0","var(--foreground)":"#1a1a1a","shadow/sm/layer-1/x":"0","shadow/sm/layer-1/blur":"0","shadow/sm/layer-1/spread":"0","shadow/sm/layer-2/x":"0","shadow/sm/layer-2/y":"0","shadow/sm/layer-2/blur":"0","shadow/sm/layer-2/spread":"0","shadow/xs/layer-1/y":"0","shadow/sm":"#0000001a","shadows/sm":"Effect(type: DROP_SHADOW, color: shadow/sm, offset: (shadow/sm/layer-2/x, shadow/sm/layer-2/y), radius: shadow/sm/layer-2/blur, spread: shadow/sm/layer-2/spread); Effect(type: DROP_SHADOW, color: shadow/sm, offset: (shadow/sm/layer-1/x, shadow/xs/layer-1/y), radius: shadow/sm/layer-1/blur, spread: shadow/sm/layer-1/spread)","p-12":"48","var(--background)":"#ffffff"}
```

===== get_design_context  (nodeId 10123:33908, fileKey IYTcuPQax3i4duD9hHruYZ) =====

```
export default function Newsletter({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[var(--background,white)] content-stretch flex gap-[var(--p-12,0px)] items-center px-[var(--p-0,0px)] py-[var(--p-6,24px)] relative w-[1224px]"} data-node-id="10123:33908" data-name="Newsletter">
      <div className="bg-[var(--foreground,#1a1a1a)] border border-[var(--border,#7e817e)] border-solid content-stretch drop-shadow-[var(--shadow\/sm\/layer-1\/x,0px)_var(--shadow\/xs\/layer-1\/y,0px)_calc(var(--shadow\/sm\/layer-1\/blur,0px)/2)_var(--shadow\/sm,rgba(0,0,0,0.1)),var(--shadow\/sm\/layer-2\/x,0px)_var(--shadow\/sm\/layer-2\/y,0px)_calc(var(--shadow\/sm\/layer-2\/blur,0px)/2)_var(--shadow\/sm,rgba(0,0,0,0.1))] flex flex-[1_0_0] flex-col gap-[var(--p-6,24px)] items-start justify-center min-w-px relative" data-node-id="10123:33878" data-name="Card">
        <div className="content-stretch flex flex-col gap-[var(--p-0,0px)] items-start relative shrink-0 w-full" data-node-id="10123:33880">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[var(--p-1\,5,6px)] items-center pb-[var(--p-3,12px)] pt-[var(--p-6,24px)] px-[var(--p-6,24px)] relative shrink-0 text-[color:var(--primary-foreground,white)] text-center w-full" data-node-id="10123:33881" data-name=".Card Header">
            <p className="font-[family-name:var(--font\/family\/font-sans,'DIN_Condensed:Bold')] leading-[1.2] min-w-full not-italic relative shrink-0 text-[length:var(--text-2xl,24px)] tracking-[-0.6px] w-[min-content]" data-node-id="I10123:33881;2761:23512">
              Stay Updated
            </p>
            <p className="font-[family-name:var(--font\/family\/font-mono,'DM_Sans:Regular')] font-[var(--font\/weight\/font-normal,400)] leading-[var(--font\/line-height\/leading-5,20px)] min-w-full relative shrink-0 text-[length:var(--text-xs,12px)] w-[min-content]" data-node-id="I10123:33881;2761:23513" style={{ fontVariationSettings: '"opsz" 14, "opsz" 14' }}>
              Be the first to know about new collections and exclusive offers.
            </p>
          </div>
          <div className="content-stretch flex gap-[var(--p-3,12px)] items-end justify-center pb-[var(--p-6,24px)] pt-[var(--p-3,12px)] px-[var(--p-4,16px)] relative shrink-0 w-full" data-node-id="10123:33882" data-name=".Card Footer">
            <div className="content-stretch flex flex-col gap-[var(--p-2,8px)] items-start p-[var(--p-0,0px)] relative shrink-0 w-[211px]" data-node-id="I10123:33882;10123:37558" data-name="Input">
              <div className="bg-[var(--custom\/bg-input-30,white)] border-[length:var(--border-width\/w-100,1px)] border-[var(--border,#7e817e)] border-solid content-stretch flex gap-[var(--p-2,8px)] items-center overflow-clip px-[var(--p-3,12px)] py-[var(--p-2,8px)] relative shrink-0 w-full" data-node-id="I10123:33882;10123:37558;6:264" data-name="Field">
                <p className="[word-break:break-word] font-[family-name:var(--font\/family\/font-mono,'DM_Sans:Regular')] font-[var(--font\/weight\/font-normal,400)] leading-[var(--font\/line-height\/leading-5,20px)] overflow-hidden relative shrink-0 text-[12px] text-[color:var(--muted-foreground,#191c19)] text-ellipsis whitespace-nowrap" data-node-id="I10123:33882;10123:37558;6:265" style={{ fontVariationSettings: '"opsz" 14, "opsz" 14' }}>
                  your.email@email.com
                </p>
              </div>
            </div>
            <div className="bg-[var(--primary-foreground,white)] content-stretch drop-shadow-[var(--shadow\/2xs\/layer-1\/x,0px)_var(--shadow\/2xs\/layer-1\/y,0px)_calc(var(--shadow\/2xs\/layer-1\/blur,0px)/2)_var(--shadow\/2xs,rgba(0,0,0,0.1))] flex gap-[var(--p-2,8px)] h-[36px] items-center justify-center px-[var(--p-4,16px)] py-[var(--p-2,8px)] relative shrink-0 w-[93px]" data-node-id="I10123:33882;10123:37559" data-name="Button">
              <p className="[word-break:break-word] font-[family-name:var(--font\/family\/font-mono,'DM_Sans:Medium')] font-[var(--font\/weight\/font-medium,500)] leading-[var(--font\/line-height\/leading-5,20px)] relative shrink-0 text-[color:var(--primary,#0e3a23)] text-[length:var(--text-xs,12px)] whitespace-nowrap" data-node-id="I10123:33882;10123:37559;6715:46629" style={{ fontVariationSettings: '"opsz" 14, "opsz" 14' }}>
                Label
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

SUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.

Node ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.

These styles are contained in the design: Body/S/leading-normal/normal: Font(family: "font/family/font-mono", style: Regular, size: text-xs, weight: font/weight/font-normal, lineHeight: font/line-height/leading-5, letterSpacing: 0), Body/S/leading-normal/medium: Font(family: "font/family/font-mono", style: Medium, size: text-xs, weight: font/weight/font-medium, lineHeight: font/line-height/leading-5, letterSpacing: 0), shadows/2xs: Effect(type: DROP_SHADOW, color: shadow/2xs, offset: (shadow/2xs/layer-1/x, shadow/2xs/layer-1/y), radius: shadow/2xs/layer-1/blur, spread: shadow/2xs/layer-1/spread), shadows/sm: Effect(type: DROP_SHADOW, color: shadow/sm, offset: (shadow/sm/layer-2/x, shadow/sm/layer-2/y), radius: shadow/sm/layer-2/blur, spread: shadow/sm/layer-2/spread); Effect(type: DROP_SHADOW, color: shadow/sm, offset: (shadow/sm/layer-1/x, shadow/xs/layer-1/y), radius: shadow/sm/layer-1/blur, spread: shadow/sm/layer-1/spread).

Component descriptions: The following components have usage descriptions or documentation links defined in Figma. These descriptions provide important context about the intended usage, best practices, and any constraints for each component. Follow these guidelines when implementing or using these components.

## Newsletter
**Node ID:** 10123:33908

**Documentation:**
- [https://ui.shadcn.com/docs/components/card](https://ui.shadcn.com/docs/components/card)

Images and SVGs will be stored as constants, e.g. const image = 'https://www.figma.com/api/mcp/asset/550e8400-e29b-41d4-a716-446655440000'. These constants will be used in the code as the source for the image, ex: <img src={image} />. Image assets are stored on a remote server for 7 days and can be fetched using the provided URLs until they expire.
