import { Form } from "../../components/Forms/Form"
import { EnterInput } from "../../components/Inputs/EnterInput"
import { Label } from "../../components/Inputs/Label"
import { Title } from "../../components/Forms/Title"
import { TextArea } from "../../components/Inputs/TextArea"
import { Dropdown } from "../../components/Dropdowns/Dropdown"
import { UploadInput } from "../../components/Inputs/UploadInput"
import { Button } from "../../components/Buttons/Button"
import { TextInput } from "../../components/Inputs/TextInput"
import { Wrapper } from "../../components/Forms/Wrapper"
import { useCreateProject } from "../../hooks/useCreateProject"
import { useQuery } from "react-query"
import { ProjectService } from "../../services/project"

const CreateProject = () => {
  const {
    data: categories,
    isError,
    isLoading,
  } = useQuery(["categories"], () => ProjectService.getCategories(), {
    select: (data) => data.category,
  })

  const { values, handleChange, handleSubmit, resetForm, setFieldValue } =
    useCreateProject()

  return (
    <Form title={"Создать проект"} onSubmit={handleSubmit}>
      <Title title='Общие данные' />
      <Wrapper>
        <Label label={"Название проекта"} required>
          <TextInput
            name={"name"}
            value={values.name}
            setValue={handleChange}
            placeholder={"мой крутой проект"}
            type={"text"}
          />
        </Label>

        <Label label={"Категория"} required>
          <Dropdown
            activeOption={values.category}
            border
            placeholder='Категория'
            selection={"_id"}
            optionSelection={"name"}
            options={categories}
            onChange={(value) => setFieldValue("category", value)}
          />
        </Label>

        <Label label={"Теги"} required>
          <EnterInput
            enterTitle='нажмите Enter после ввода тега'
            selectors={values.tags}
            setSelectors={(tags: string) => setFieldValue("tags", tags)}
            placeholder={"теги проекта"}
            type={"text"}
          />
        </Label>

        <Label label='Инвестиции' required>
          <TextInput
            name={"investments"}
            value={values.investments?.toString()}
            setValue={handleChange}
            placeholder={"сколько собрано инвестиций"}
            type={"number"}
          />
        </Label>

        <Label label='Free Cash Flow'>
          <TextInput
            name={"freeCashFlow"}
            value={values.freeCashFlow?.toString()}
            setValue={handleChange}
            placeholder={"freeCashFlow"}
            type={"number"}
          />
        </Label>

        <Label label='Сроки реализации'>
          <TextInput
            name={"realisation"}
            value={values.realisation}
            setValue={handleChange}
            placeholder={"когда проект будет реализован"}
            type={"string"}
          />
        </Label>
      </Wrapper>

      <Title title='Описание проекта' />
      <Wrapper>
        <Label label='Короткое описание' required>
          <TextArea
            name={"shortDescription"}
            maxLength={280}
            value={values.shortDescription}
            setValue={handleChange}
            placeholder={"Платформа для привлечения инвестиций стартапами"}
          />
        </Label>

        <Label label='Полное описание' required>
          <TextArea
            name={"longDescription"}
            maxLength={600}
            value={values.longDescription}
            setValue={handleChange}
            placeholder={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per ..."
            }
          />
        </Label>
        <Label required label='Ссылка на проект'>
          <TextInput
            name={"demoUrl"}
            value={values.demoUrl}
            setValue={handleChange}
            placeholder={"https://hooli.com"}
            type={"text"}
          />
        </Label>

        <Label required label='Ссылка на презентацию'>
          <TextInput
            name={"presentationUrl"}
            value={values.presentationUrl}
            setValue={handleChange}
            placeholder={"drive.google.com"}
            type={"text"}
          />
        </Label>

        <Label label={"Адрес крипто кошелька"}>
          <TextInput
            name={"walletAddress"}
            value={values.walletAddress}
            setValue={handleChange}
            placeholder={"0x3c21AdC545aF820f9734eb67e504a845b897c4FF"}
            type={"text"}
          />
        </Label>

        <Label label='Команда'>
          <EnterInput
            type={"text"}
            enterTitle='нажмите Enter после ввода имени пользователя'
            selectors={values.teamMembers}
            setSelectors={(teamMembers: string) =>
              setFieldValue("teamMembers", teamMembers)
            }
            placeholder={"имя пользователя"}
          />
        </Label>
      </Wrapper>

      <Title title='Презентация' />
      <Wrapper>
        <Label label='Обложка'>
          <UploadInput
            file={values.coverUrl}
            setFile={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.target.files) {
                setFieldValue("coverUrl", event.target.files[0])
              }
            }}
          />
        </Label>

        <Label label='Скриншоты'>
          <div className='flex flex-col gap-y-2 sm:grid sm:grid-cols-6 sm:gap-x-2'>
            <UploadInput
              file={values.screenShot1}
              setFile={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.files) {
                  setFieldValue("screenShot1", event.target.files[0])
                }
              }}
            />
            <UploadInput
              file={values.screenShot2}
              setFile={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.files) {
                  setFieldValue("screenShot2", event.target.files[0])
                }
              }}
            />
            <UploadInput
              file={values.screenShot3}
              setFile={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.files) {
                  setFieldValue("screenShot3", event.target.files[0])
                }
              }}
            />
            <UploadInput
              file={values.screenShot4}
              setFile={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.files) {
                  setFieldValue("screenShot4", event.target.files[0])
                }
              }}
            />
            <UploadInput
              file={values.screenShot5}
              setFile={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.files) {
                  setFieldValue("screenShot5", event.target.files[0])
                }
              }}
            />
            <UploadInput
              file={values.screenShot6}
              setFile={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.files) {
                  setFieldValue("screenShot6", event.target.files[0])
                }
              }}
            />
          </div>
        </Label>
      </Wrapper>

      <div className='flex justify-between'>
        <Button
          type='submit'
          title={"Создать проект"}
          className={"py-[16px] text-black bg-darkGreen rounded-[20px] px-14"}
        />
        <Button
          type='reset'
          title={"Очистить все"}
          className={"py-[16px] text-black bg-white rounded-[20px] px-14"}
          onClick={() => resetForm()}
        />
      </div>
    </Form>
  )
}

export default CreateProject
