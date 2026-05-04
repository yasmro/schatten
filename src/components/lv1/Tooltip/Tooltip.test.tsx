import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './Tooltip'

const renderTooltip = (ui: React.ReactNode) => {
  return render(<TooltipProvider delayDuration={0}>{ui}</TooltipProvider>)
}

describe('Tooltip', () => {
  it('renders trigger element', () => {
    renderTooltip(
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    )
    expect(screen.getByText('Hover me')).toBeInTheDocument()
  })

  it('shows tooltip content on hover', async () => {
    const user = userEvent.setup()
    renderTooltip(
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    )

    await user.hover(screen.getByText('Hover me'))
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })
  })

  it('shows tooltip content on focus', async () => {
    const user = userEvent.setup()
    renderTooltip(
      <Tooltip>
        <TooltipTrigger asChild>
          <button type="button">Focus me</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    )

    await user.tab()
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })
  })

  it('applies custom className to TooltipContent', async () => {
    const user = userEvent.setup()
    renderTooltip(
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent className="custom-class">Tooltip content</TooltipContent>
      </Tooltip>,
    )

    await user.hover(screen.getByText('Hover me'))
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })
    // The content wrapper is the parent of the tooltip role element
    const tooltipContent = screen.getByRole('tooltip').parentElement
    expect(tooltipContent).toHaveClass('custom-class')
  })

  it('renders with asChild trigger', async () => {
    const user = userEvent.setup()
    renderTooltip(
      <Tooltip>
        <TooltipTrigger asChild>
          <button type="button">Custom trigger</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    )

    expect(screen.getByRole('button', { name: 'Custom trigger' })).toBeInTheDocument()
    await user.hover(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })
  })

  it('can be controlled with open prop', async () => {
    render(
      <TooltipProvider>
        <Tooltip open>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    )

    expect(screen.getByRole('tooltip')).toBeInTheDocument()
  })

  it('respects defaultOpen prop', () => {
    render(
      <TooltipProvider>
        <Tooltip defaultOpen>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip content</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    )

    expect(screen.getByRole('tooltip')).toBeInTheDocument()
  })
})
