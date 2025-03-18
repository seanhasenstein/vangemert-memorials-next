'use client';

import { useState } from 'react';
import styled from 'styled-components';

export default function FaqContent() {
  const [activeItem, setActiveItem] = useState<number | undefined>(undefined);

  const handleClick = (item: number) => {
    setActiveItem(item);
    if (item === activeItem) {
      setActiveItem(undefined);
    }
  };

  return (
    <FaqStyles>
      <h2>Frequently Asked Questions</h2>
      <dl>
        <div className="item">
          <dt>
            <button
              aria-expanded={activeItem === 1}
              aria-controls={`accordion-panel-1`}
              id={`accordion-panel-1`}
              onClick={() => handleClick(1)}
            >
              <span className="question">How do I choose a memorial?</span>
              <span className="icon">
                <svg
                  className={`${activeItem === 1 ? 'rotate' : ''}`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
          </dt>
          <dd
            className={activeItem === 1 ? 'active' : ''}
            id={`accordion-panel-1`}
            aria-labelledby={`accordion-item-1`}
            role="region"
            hidden={activeItem !== 1}
          >
            <h4>Step 1: Gather your ideas</h4>
            <p>
              What aspects of your loved one&apos;s will you want to preserve
              and cherish?
            </p>

            <p>
              Consider the following aspects that make up the chapters of a
              life:
            </p>
            <ul>
              <li>Family Heritage</li>
              <li>Life&apos;s Work and Accomplishments</li>
              <li>Interests and Hobbies</li>
              <li>Social and Civic Contributions</li>
              <li>Memorable Events and Occasions</li>
              <li>Faith and Belief</li>
              <li>Character and Traits</li>
              <li>
                From these, jot down your ideas - inscription, endearments,
                religious symbols, civic or military emblems.
              </li>
            </ul>

            <h4>Step 2: Meet with our staff</h4>
            <p>
              Our skilled memorial staff can help you understand different
              design and carving options, lettering and photographs. You can
              choose from our library of standard design work or we can create
              custom artwork for your individual use. Working together we will
              create a rough outline indicating where the design and text
              elements should be placed.
            </p>

            <h4>Step 3: Rendering for approval</h4>
            <p>
              Our staff will create a rendering for your review and approval.
              Any last minute adjustments can be made. Once the rendering is
              approved, work will begin on the memorial.
            </p>

            <h4>Step 4: Finished</h4>
            <p>
              The completed memorial will truly tell your loved one&apos;s story
              in stone.
            </p>
          </dd>
        </div>
        <div className="item">
          <dt>
            <button
              aria-expanded={activeItem === 2}
              aria-controls={`accordion-panel-2`}
              id={`accordion-panel-2`}
              onClick={() => handleClick(2)}
            >
              <span className="question">
                What is cremation memorialization?
              </span>
              <span className="icon">
                <svg
                  className={`${activeItem === 2 ? 'rotate' : ''}`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
          </dt>
          <dd
            className={activeItem === 2 ? 'active' : ''}
            id={`accordion-panel-2`}
            aria-labelledby={`accordion-item-2`}
            role="region"
            hidden={activeItem !== 2}
          >
            <p>
              Since 1985, there has been a steady growth rate in cremation. Many
              factors influence this growth, from a poor economy to going green.
              According to the Cremation Association of North America (CANA),
              33.5% of deaths were cremated in 2009. 34.5% in 2010 and the rate
              is climbing 1.5% to 2% each year. But there is a problem; what do
              families do with the cremated body? For those wishing to be
              &quot;spread&quot;, there are designated areas in cemeteries to
              spread ashes. However, the idea of numerous cremated bodies in one
              area does not appeal to most. There are those who place the
              cremated remains in decorative urns of all types and keep them in
              the home to be close to the one who passed away. Let&apos;s
              explore that scenario.
            </p>

            <p>
              Mom passed away and the two of you were very close. Her wish was
              to be cremated, and you couldn&apos;t find yourself parting with
              her ashes. You are keeping her close to you by placing her remains
              in an urn situated on the mantel. You are comforted by the
              knowledge that she is close by, and you are pleasantly reminded of
              her every time you dust the urn. However, how are other members of
              the family reminded of her and how are they able reflect on her
              memory? Do they come to your house? What happens to mom when it is
              your time to pass on? Who will care for her remains then?
            </p>

            <p>
              These questions have been raised in this time of increasing
              cremation rates. Where does one go to visit, place flowers, and
              reminisce the life once lived? For centuries families buried the
              remains of a loved one and placed a marker at the head of the
              grave. It was accessible to all that knew and loved that person.
              In recent years, families became mobile and it has become less
              common for members of the family to remain in their hometown.
              Going to the cemetery to visit mom&apos;s grave may occur less
              frequently than in days past, yet there is still the desire to do
              so, particularly on a special occasion such as a holiday or
              birthday.
            </p>

            <p>
              It&apos;s been said, cemeteries are not only for the dead, but for
              the living as well. It is human nature to want to be close again
              to the ones you miss. Visiting the grave is the only physical
              means to achieve that closeness, but these days, only 65% of
              people who die are buried in cemeteries. Are we losing interest?
              Is family not as important in today&apos;s society? The answer is
              absolutely no. We are the same as our ancestors, and family is
              just as important to us as it was to them. Cremation just seems
              the easier thing to do; less fuss perhaps, or cheaper than a
              funeral. However, have we considered the emotions of the ones left
              behind?
            </p>

            <p>
              Memorialization is just as important to the human psyche as it has
              been in past centuries. Creating that permanent resting place for
              a loved one enables visitation for present and future generations.
              It leaves a mark indicating a person lived on this earth and
              memorials endure the elements for hundreds of years.
              Memorialization is not just for the dearly departed; it remains
              for the living. When asked, &quot;How does cremation affect
              genealogy research?&quot; genealogy expert, Sara Skotzke, states:
              &quot;I do use grave listings most every day, many times calling
              cemeteries to find a missing clue. Just today I found an unknown
              member of a client&apos;s family by calling the cemetery about
              another family member. I also find so many clues about connecting
              families by seeing who is buried in relating family lots. I wish
              there was a way to handle the records of cremated remains to keep
              the family history alive as I truly believe that a headstone keeps
              the family&apos;s story alive.&quot;
            </p>

            <p>
              College student, Hannah Ackerman, lost her mother to breast cancer
              in May of 2010. Her mother was cremated in compliance with her
              wishes, and her ashes were spread. Hannah states, &quot;I really
              regretted not having a grave site or something to go to.
              That&apos;s why I asked my dad to get a headstone for here or just
              buy a site at the cemetery. I would&apos;ve liked to have a place
              to go where I felt like I could &apos;be&apos; with her.&quot;
            </p>

            <p>
              Thinking in future terms, one must consider the caretaking of the
              cremated body. Placing them in a cemetery setting with a permanent
              memorial insures not only the safety of the remains, but provides
              a place to remember the loved one missed by you and others in the
              family, now and forever.
            </p>
          </dd>
        </div>
        <div className="item">
          <dt>
            <button
              aria-expanded={activeItem === 3}
              aria-controls={`accordion-panel-3`}
              id={`accordion-panel-3`}
              onClick={() => handleClick(3)}
            >
              <span className="question">
                What economical memorial options do you offer?
              </span>
              <span className="icon">
                <svg
                  className={`${activeItem === 3 ? 'rotate' : ''}`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
          </dt>
          <dd
            className={activeItem === 3 ? 'active' : ''}
            id={`accordion-panel-3`}
            aria-labelledby={`accordion-item-3`}
            role="region"
            hidden={activeItem !== 3}
          >
            <p>
              Even though Van Gemert Memorials has found its niche as the
              premier memorial company for unique design and outstanding
              personalization, we are deeply rooted in traditional memorials and
              working closely with families to find the &quot;Right&quot;
              memorial regardless of their budget. You will always be able to
              find prices on either end of those shown. The price is always
              dependent on size, color, granite quality, style, carving and
              other important factors. When planning a funeral on a budget you
              may also want to look at our wide selection of Cremation Urns.
            </p>
          </dd>
        </div>
        <div className="item">
          <dt>
            <button
              aria-expanded={activeItem === 4}
              aria-controls={`accordion-panel-4`}
              id={`accordion-panel-4`}
              onClick={() => handleClick(4)}
            >
              <span className="question">Is it important to plan ahead?</span>
              <span className="icon">
                <svg
                  className={`${activeItem === 4 ? 'rotate' : ''}`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
          </dt>
          <dd
            className={activeItem === 4 ? 'active' : ''}
            id={`accordion-panel-4`}
            aria-labelledby={`accordion-item-4`}
            role="region"
            hidden={activeItem !== 4}
          >
            <p>
              One of the most important gifts you can give your loved ones is
              the gift of planning ahead. You can make the decisions regarding
              the design of a lasting memorial now and have it designed to
              fulfill your wishes and expectations. At Van Gemert Memorials, we
              will assist you in designing a memorial, choosing the color of
              granite to be used, and composing the inscriptions.
            </p>

            <p>
              By planning ahead, you ensure that you will have the exact
              memorial that you envisioned. By taking these steps, you can
              alleviate stress and potential conflicts created when grieving
              family members are confronting the decision of what might have
              been your intentions.
            </p>

            <p>
              Another advantage of planning ahead is that the price of the
              memorial will be protected from future increases. The cost today
              will be the final cost-it will not increase as the cost of living
              increases. You may wish to have the memorial installed now or in
              the future. In either case, the price will not increase.
            </p>

            <p>
              You can give your family this gift of planning ahead by contacting
              Van Gemert Memorials. We will be happy to assist you with your
              plans.
            </p>
          </dd>
        </div>
        <div className="item">
          <dt>
            <button
              aria-expanded={activeItem === 5}
              aria-controls={`accordion-panel-5`}
              id={`accordion-panel-5`}
              onClick={() => handleClick(5)}
            >
              <span className="question">
                Does Van Gemert Memorials do any community work?
              </span>
              <span className="icon">
                <svg
                  className={`${activeItem === 5 ? 'rotate' : ''}`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
          </dt>
          <dd
            className={activeItem === 5 ? 'active' : ''}
            id={`accordion-panel-5`}
            aria-labelledby={`accordion-item-5`}
            role="region"
            hidden={activeItem !== 5}
          >
            <p>
              Van Gemert Memorials prides itself in its Civic and Veterans&apos;
              projects. We work closely with municipalities and organizations to
              design a meaningful and appropriate memorial. This includes
              specialized sculptures, detailed monuments, and engraved
              commemorative bricks. We can also create a sign for your business,
              organization, or subdivision.
            </p>
          </dd>
        </div>
      </dl>
    </FaqStyles>
  );
}

const FaqStyles = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 5rem 1.5rem;

  .item {
    margin: 1.5rem 0 0;
    padding: 1.5rem 0 0;
    border-top: 1px solid #dfe1e6;

    &:first-of-type {
      margin: 0;
      padding: 0;
      border: none;
    }
  }

  dt {
    button {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      color: #8d95a3;
      text-align: left;
      font-family: 'Inter', sans-serif;
      font-size: 1.125rem;
      line-height: 1.75rem;

      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      &:focus-visible {
        .question,
        .icon {
          color: #1967d2;
        }

        .question {
          text-decoration: underline;
        }
      }
    }
  }

  dd {
    margin: 0.75rem 0 0;
    padding: 0 3rem 0 0;
  }

  .question {
    font-weight: 500;
    color: #111623;
  }

  .icon {
    margin: 0 0 0 0.9375rem;
    padding: 0.125rem;
    height: 1.75rem;
    width: 1.75rem;
    display: flex;
    align-items: center;
    border: 2px solid transparent;
    border-radius: 0.25rem;

    svg {
      height: 1.5rem;
      width: 1.5rem;
      display: flex;
      align-items: center;

      &.rotate {
        transform: rotate(180deg);
      }
    }
  }

  h2 {
    margin: 0 0 4rem;
    text-align: center;
  }

  h4 {
    display: inline-flex;
    margin: 1.75rem 0 1.25rem;
    padding: 0.25rem 1rem;
    font-size: 0.875rem;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: #0e7490;
    background-color: #cffafe;
    border-radius: 9999px;
  }

  ul {
    margin: 0.9375rem 0;
    padding: 0 0 0 1.25rem;
  }

  li {
    margin: 0.5rem 0;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: #585e6d;
    list-style-type: disc;
  }

  p {
    line-height: 1.65;
    margin: 0 0 1.75rem;
  }
`;
